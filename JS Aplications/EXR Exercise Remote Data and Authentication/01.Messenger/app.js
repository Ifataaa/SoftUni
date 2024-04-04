function attachEvents() {
    const url = "http://localhost:3030/jsonstore/messenger"

    document.getElementById("submit").addEventListener("click", onSubmit);
    document.getElementById("refresh").addEventListener("click", onRefresh);


    async function onSubmit() {
        const authorRef = document.querySelector("input[name='author']");
        const contentRef = document.querySelector("input[name='content']");

        const author = authorRef.value;
        const content = contentRef.value;
        if (author.length == 0 || content.length == 0) {
            return;
        }

        try {
            let req = await fetch(url, {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ author, content })
            });

            if (!req.ok) {
                const err = await req.json();
                throw new Error(err);
            }

            authorRef.value = "";
            contentRef.value = "";

        } catch (error) {
            alert(error);
        }
    }

    async function onRefresh() {
        const textBox = document.getElementById("messages");
        textBox.value = '';
        try {
            const req = await fetch(url);

            if (!req.ok) {
                const err = await req.json();
                throw new Error(err);
            }

            const data = await req.json();

            Object.values(data).forEach(record => {
                textBox.value += record.author + ": " + record.content + "\n";
            });
            textBox.value = textBox.value.trim();


        } catch (error) {
            alert(error);
        }
    }
}

attachEvents();