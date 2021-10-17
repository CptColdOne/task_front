import "./style.scss";

export function initPage () {
    document.getElementById("button-send").addEventListener("click", (e:Event) => {
        e.preventDefault();
        alert("Сообщение отправлено в консоль (форма для обратной связи будет очищена)");
        let feedback = (<HTMLInputElement>document.getElementById("feedback-input"));
        console.log("Сообщение из формы: " + feedback.value);
        feedback.value = "";
    });
}

initPage();