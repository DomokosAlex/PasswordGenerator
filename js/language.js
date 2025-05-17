const text = {
    //a nyelv a key
    "hu": {
        //ha magyar lett kivalasztva akkor magyar szövegre csereli ki (forditja a szöveget)
        //id-t nem tudtam használni mert ugy nehezen tudtam megkülönböztetni mit kellet forditani és mit nem
        // a data- attributum itt segit,

        //data- attributumba van irva a value a forditott szöveg
        "Password Generator": "Jelszó Generátor",
        "Generate passwords in seconds.": "Generálj jelszavakat másodpercek alatt.",
        "BG Color:": "Háttérszín:",
        "Darkness:": "Sötétség:",
        "Blur:": "Elmosódás:",
        "Upper": "Nagy",
        "Lower": "Kis",
        "Number": "Számok",
        "Special": "Speciális",
        "Min. 1": "Min. 1",
        "Generate": "Generálás",
        "Contacts:": "Elérhetőségek:",
        "Created by:": "Készítette:",
        "The site does NOT store the passwords.": "Az oldal NEM tárolja a jelszavakat.",
        "Important Sources:": "Fontos Források:",
        "Background": " Háttér",
        "Documentation": " Dokumentáció",
        "Length": "A jelszónak a hossza",
        "Blur": "A háttér elmosódása.",
        "BG Color": "Az oldal háttérszíne.",
        "Darkness": "A háttér sötétsége.",
        "Min1T": "Tartalmazzon minden kategóriaból 1 karaktert",
        "Language": "<i class='bi bi-translate'></i>" + " Nyelv"

    },
    "ua": {
        "Password Generator": "Генератор Паролів",
        "Generate passwords in seconds.": "Генеруйте паролі за секунди.",
        "BG Color:": "Колір фону:",
        "Darkness:": "Темрява:",
        "Blur:": "Розмиття:",
        "Upper": "Великі",
        "Lower": "Малі",
        "Number": "Цифри",
        "Special": "Спеціальні",
        "Min. 1": "Мін. 1",
        "Generate": "Генерувати",
        "Contacts:": "Контакти:",
        "Created by:": "Створив:",
        "The site does NOT store the passwords.": "Сайт НЕ зберігає паролі.",
        "Important Sources:": "Важливі джерела:",
        "Background": " Фон",
        "Documentation": " Документація",
        "Length": "Довжина пароля",
        "Blur": "Розмиття фону.",
        "BG Color": "Колір фону.",
        "Darkness": "Темрява фону.",
        "Min1T": "Має 1 символ з кожної категорії",
        "Language": "<i class='bi bi-translate'></i>" + " Мова"

    },
    "en": {
        "Password Generator": "Password Generator",
        "Generate passwords in seconds.": "Generate passwords in seconds.",
        "BG Color:": "BG Color:",
        "Darkness:": "Darkness:",
        "Blur:": "Blur:",
        "Upper": "Upper",
        "Lower": "Lower",
        "Number": "Number",
        "Special": "Special",
        "Min. 1": "Min. 1",
        "Generate": "Generate",
        "Contacts:": "Contacts:",
        "Created by:": "Created by:",
        "The site does NOT store the passwords.": "The site does NOT store the passwords.",
        "Important Sources:": "Important Sources:",
        "Background": " Background",
        "Documentation": " Documentation",
        "Length": "Password's length.",
        "Blur": "Background's blur.",
        "BG Color": "Background's color.",
        "Darkness": "Background's darkness.",
        "Min1T": "Includes 1 character of each category",

        //ezert van innerhtml textcontent helyett, textcontent nem jeleniti meg az ikont
        "Language": "<i class='bi bi-translate'></i>" + " Language"
    },
};

function Translate(lang) {

    //keresse ki az összes elemet aminek data-key attributuma van
    const tranelements = document.querySelectorAll("[data-key]");

    tranelements.forEach(e => {

        var tx = e.getAttribute("data-key")

        //bootstrap tooltip title attributumot használ ahoz hogy beallitsam milyen szöveget mutasson
        if (e.hasAttribute('data-bs-original-title')) {
            e.setAttribute("data-bs-original-title", text[lang][tx]);
        } else {

            //az eventben parameterkent megvan adva a nyelv 
            // (pl. hu, akkor annak a value -> szotár, amiben a data-key a kulcs es annak a valuejat allitjuk be szövegként)

            //innerhtml textcontent helyett, textcontent nem jeleniti meg az ikont

            e.innerHTML = text[lang][tx];
        }

    })


}

                                                                    //nyelv paraméter
document.getElementById("en").addEventListener("click", function () { Translate("en") });
document.getElementById("hu").addEventListener("click", function () { Translate("hu") });
document.getElementById("ua").addEventListener("click", function () { Translate("ua") });