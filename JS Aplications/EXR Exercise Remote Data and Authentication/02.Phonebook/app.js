function attachEvents() {
    const url = "http://localhost:3030/jsonstore/phonebook";

    document.getElementById("btnLoad").addEventListener("click", onLoad);
    document.getElementById("btnCreate").addEventListener("click", onCreate);

    async function onLoad() {
        let ul = document.getElementById("phonebook");
        ul.replaceChildren();

        try {
            const res = await fetch(url);

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err);
            }

            const data = await res.json();
            
            Object.values(data).forEach(record => {
                let li = document.createElement("li");
                li.textContent = record.person + ": " + record.phone;

                let delBtn = document.createElement("button");
                delBtn.textContent = "Delete";
                delBtn.addEventListener("click", onDelete);
                delBtn.dataset.id = record._id;

                li.appendChild(delBtn);
                ul.appendChild(li);
            });


        } catch (error) {
            alert(error);
        }
    }

    async function onCreate() {
        const personRef = document.getElementById("person");
        const phoneRef = document.getElementById("phone");

        const person = personRef.value;
        const phone = phoneRef.value;

        if (!person || !phone) {
            return;
        }

        try {

            const res = await fetch(url, {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ person, phone })
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err);
            }

            personRef.value = "";
            phoneRef.value = "";

            onLoad();
        } catch (error) {
            alert(error);
        }
    }

    async function onDelete(ev) {
        //debugger
        let id = ev.target.dataset.id;

        try {
            const res = await fetch(url + "/" + id, { method: "delete" });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err);
            }

            onLoad();
        } catch (error) {
            alert(error);
        }
    }
}



attachEvents();