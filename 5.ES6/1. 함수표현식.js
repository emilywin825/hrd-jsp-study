
/*
    # 다음과 같은 조건을 만족하는 객체를 일급객체라고 한다.
    1. 무명의 리터럴(이름 없는 함수)로 생성할 수 있다. 즉, 런타임에 생성이 가능하다.
    2. 변수나 자료구조(객체, 배열 등)에 저장할 수 있다.
    3. 함수의 매개변수에 함수를 전달할 수 있다.
    4. 함수의 반환값으로 사용할 수 있다.
    # 자바스크립트의 함수는 위의 조건을 모두 만족하므로 일급 객체라 할 수 있다.
 */

function add(n1,n2) {
    return n1+n2;
}
const plus = add; //함수 자체를 대입
const r1 = plus(10,20);
console.log(`r1 : ${r1}`);

//무명함수 생성 : 함수 리터럴 === 값이기 때문에 ; 붙음
//무명함수 : 재사용 하지 않는, 한번만 사용할 함수를 위한 개념
// 리터럴(Literal) 방식으로 변수에 담겨 사용하는 함수
const sub = function (n1, n2){
    return n1 - n2;
};
sub(20, 10);

const fArr = [ 10,
               'hello',
                true,
                {},
                [],
                add,
                function(){console.log('메롱')}
            ]; 

fArr[6]();

const dog = {
    name:'초코',
    kind : '푸들',

    //메서드 : 객체의 기능
    bark : function(){
        console.log('왈왈!');
    }
};

dog.bark();
const cat={
    name:'야옹이',
    kind:'페르시안',
    sleep : function(){
        console.log('쿨쿨 zzz');
    }
};
cat.sleep();
//앞에 . 붙으면 메서드, 안붙으면 함수

