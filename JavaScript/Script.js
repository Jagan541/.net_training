//Student Result

let Name=prompt("Enter your Name");

let Marks=prompt("enter your marks");


switch (true) {
    case Marks >90 && Marks <=100:
        result="Great you are the topper"
    break;

    case Marks >65 && Marks <=90:
        result="you got frist rank"
    break;

    case Marks >=40 && Marks < 65:
        result= "you got second rank"
    break;

    case Marks >=30 && Marks <= 40:
        result="you got third rank"
    break;

    case Marks <30:
        result= " sorry you got falied better luck next time"
    break;

    default:
        result="please enter your marks"
        break;
}

        document.write("Hello"+ Name + "<h2>"+ result+ "</h2>")


