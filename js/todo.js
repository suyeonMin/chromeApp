const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "toDos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter( (toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;  //이렇게 요소에 아이디 추가시킬 수 있음!(아이디만 됨. 클래스 x)
    const span = document.createElement("span");
    const button = document.createElement("button");

    li.appendChild(span);
    li.appendChild(button);
    button.innerText = "❌";
    button.addEventListener("click",deleteTodo);

    span.innerText = newTodoObj.text;
    toDoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value = "";

    const newTodoObj = {
        text: newToDo,  //입력한 값값
        id: Date.now(), //랜덤 아이디
    }

    toDos.push(newTodoObj); // 배열에 값 넣기
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);


//브라우저에 저장된 리스트 가져오기
const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}



// 새로 배운 것
// event.target = 제이쿼리의 $(this) 같은 것!
// event.target.parentElement = 상위노드 선택.
// JOSN.stringify() : 자바스크립트 값이나 객체를 문자열로 반환.
// forEach() : 배열에서 각 값마다 반복해서 함수 실행.
// Date.now() : 밀리세컨드 제공. 랜덤아이디 만들 때 사용.
// filter() : forEach와 유사. 함수 적용시켜 새로운 배열 만듬. 기존 배열요소를 포함하고 싶다면 반드시 true 값을 반환해야 함.