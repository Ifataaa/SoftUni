function cutAndReverse(str) {
    let splitIdx = str.length / 2;

    let fText = str.slice(0, splitIdx);
    let sText = str.slice(splitIdx);
    let fOutp = '';
    let sOutp = '';

    for (let i = fText.length - 1; i >= 0; i--) {
        let splitted = fText.split('');
        fOutp += splitted[i];
    }

    for (let i = sText.length - 1; i >= 0; i--) {
        let splitted = sText.split('');
        sOutp += splitted[i];
    }

    console.log(fOutp);
    console.log(sOutp);

}

// cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');