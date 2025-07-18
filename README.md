## Chapter 1
#### 1-1
- 변할 수 있는 데이터를 만든다. 이 데이터의 식별자는 a로 한다.
- a는 변경 가능한 데이터가 담길 수 있는 공간 또는 그릇이다.
#### 1-2
- 선언 과정 이후 할당하는 과정입니다.
- a의 주소를 검색해서 그곳에 문자열 'abc'를 할당합니다.
- 다만 실제로 문자열을 저장하지는 않습니다.
#### 1-3
- 데이터영역 메모지를 통해 불변성 여부를 구분한다.
- 4번째 줄에서 변수 b에 숫자 5를 할당합니다. 이후 5를 찾으며 없으면 데이터 공간을 하나 만들어 저장합니다.
- 5와 7 모두 다른 값으로 변경이 불가능합니다.
#### 1-4
- 객체의 변수 영역이 별도로 존재합니다.
- 변수 obj1은 실제 데이터가 저장된 메모리 주소를 참조한다.
- 참조형은 변수에 주소값이 저장됩니다.
#### 1-5
- 참조형 데이터 변경하는 예제입니다.
- 객체의 프로퍼티 a의 값을 직접 변경한다.
- 새로운 객체로 재할당하지 않는 한 같은 객체를 가리킵니다.
#### 1-6
- 객체 내부의 배열이나 객체도 모두 별도의 참조형 메모리 구조를 가지고 있습니다.
- 참조형 안에 또 다른 참조형이 있으면 얕은 복사/깊은 복사 구분이 중요합니다.
#### 1-7
- obj2 는 기본형이 아니므로 주소를 통해 명명해야 합니다.
#### 1-8
- obj2.c 는 property를 변경하는 경우 위에 c 아래 d 가 바뀝니다.(가변)
- 내부 값을 변경하면 공유된 객체 전체에 영향을 줍니다.
#### 1-9
- obj2에 새로운 객체가 할당되며, 더 이상 obj1과 연결되지 않습니다.
- 참조형 변수는 새로운 객체를 할당하면 주소도 바뀝니다.
#### 1-10
- 참조형 데이터의 '가변'은 데이터 자체가 아닌 내부 프로퍼티를 변경할 때만 성립합니다.
- 새로운 데이터를 할당하고자 하면 기본형 데이터와 마찬가지로 기존 데이터는 변하지 않습니다.
#### 1-11
- 새로운 객체 리터럴을 직접 생성해서 반환함으로써 user와 user2는 다른 주소를 갖는다.
-Jung이 new name으로 새로운 object를 만들고 그 주소를 return 합니다.
#### 1-12
- 단순 복사이기 때문에 중첩 객체나 배열은 주소만 복사하는것이 얕은 복사이며 이것을 Shellowcopy라고 부르기도한다.
- result에 새로운 object의 주소를 return합니다.
#### 1-13
- user2는 user와는 별개의 객체이며 user에 중첩 객체가 있다면 공유될 수 있습니다.
#### 1-14
- 중첩된 객체까지 복사하려면 깊은 복사 필요성을 확인 가능한 예제입니다.
- Jaenam으로 user2가 가르키며 그 이후 Jung을 가르키고 있습니다.
#### 1-15
- old는 변하지 않고 new는 변합니다.
- 단계마다 복사함으로써 참조부분의 공유를 방지합니다.
#### 1-16
- result = target 부분이 deepcopy의 핵심입니다.
#### 1-17
- obj2.b.c 변경 하여도 obj에는 영향이 없습니다.
- obj.b.d[1] = 3 변경시에는 obj2의 d는 원본 배열이므로 영향을 받습니다.
#### 1-18
- __proto__나 getter/srtter들은 copy가 불가능 합니다.
- object target이 string으로 바뀝니다.
#### 1-19
- undefined는 값을 대입하지 않는 변수에 접근합니다.
- 반환 값이 없으면 undefined를 반환한 것으로 간주합니다.
#### 1-20
- 08번 라인처럼 사용하지 않습니다.
#### 1-21
- undefined는 없는것이 아닌 주소로 인식합니다.
- arr1.map은 새로운 array를 만듭니다.
- forEach, map, filter, reduce는 속에 들어있는 function을 적용하는 것 입니다.
#### 1-22
- typeof는 null이거나 object이며 이는 자바스크립트 자체 버그입니다.


## Chapter 2
#### 2-1
- inner 수행 끝나면 없어지며 그 이후 outer도 끝나며 이것 또한 제거 됩니다.
- inner() 함수 내부에서는 지역 변수 a가 호이스팅되어 undefined가 출력됩니다.
- console.log(a) 위치 이전에 var a가 선언되었기 때문에 outer() 바깥의 a는 global이며 outer() 내부에서는 a를 수정하지 않으므로 여전히 1입니다.
#### 2-2
- a()는 괄호 안을 수행하며 ()없으면 자체적으로 수행하지 않습니다.
- x에 1을 넣는것은 var x 에 넣는것과 동일합니다.
#### 2-3
- 변수는 한 번만 선언되며, 이후 var x;는 무의미하며 값을 덮어씌워질 수 있습니다.
- var는 중복 선언은 무시됩니다.
#### 2-4
- 모든 var x 선언은 통합됩니다.
- var 선언은 중복이 가능하지만 의미가 없으며 재할당만 의미를 가집니다.
#### 2-5
- 동일 이름일 경우 변수 할당이 우선 적용됩니다.
- function b() { }에의해 var b 가 없어지며 그후 b='bbb'로 재할당 됩니다.
#### 2-6
- 함수 선언문 b()는 전체가 호이스팅되고, 변수 b는 선언만 호이스팅됩니다.
- 함수 선언이 변수보다 우선 적용되며 변수 할당으로 값이 문자열로 덮임이 나타납니다.
#### 2-7
- b = function b() {}는 함수 표현식이며 변수 b에 함수 객체가 할당
- 최종적으로 b는 문자열 'bbb'로 나타납니다.
#### 2-8
- a는 함수선언문이며 전체를 호이스팅 합니다.
- b는 익명 함수 표현식으로 b변수만 호이스팅 합니다.
- c는 기명 함수 표현식으로 d는 내부 스코프에서만 사용이 가능합니다.
#### 2-9
- 04~06라인은 함수선언 형식으로는 추천하지 않는 형식입니다.
- 08~10라인 처럼 함수선언을 해야합니다.
- 함수 표현식은 선언 후 호출해야 안전합니다.
#### 2-10
- sum은 변수에 함수 객체를 할당한 것일 뿐, 호이스팅 시점에서는 undefined합니다.
- multiply는 선언만 호이스팅되고, 할당 전 호출되었기 때문에 에러가 발생합니다.
#### 2-11
-전체 hoisting 선언을 해야하며 hoisting이 끝난후 다시 처음부터 다시 수행이 일어납니다.
- 실제로는 함수 선언문이 중복될 경우 마지막 선언이 적용되며 실제로 hosting떄문에 1+2=3으로 나타나지 않습니다.
#### 2-12
- console.log(sum(3, 4));는 sum이 아직 함수가 아니므로 TypeError 발생합니다.(hoisting 후 바로 에러 발생)
#### 2-13
- 스코프 체인은 내부를 찾아서 없을경우 외부 체인에서 찾습니다.
- 호이스팅된 선언은 undefined로 초기화 됩니다.
#### 2-14
- console.dir(inner)은 함수 객체를 콘솔에 출력
#### 2-15
- 클로저란 외부 함수의 변수에 접근하는 내부함수 입니다.
- inner()는 outer()의 변수 b에 접근 가능하여 클로저가 형성이 됩니다.
#### 2-16
- outer() 함수가 호출되면 b = 2가 선언되고 할당하며 inner() 함수가 실행되면 외부 스코프에 선언된 b에서 2를 출력합니다.


## Chapter 3
#### 3-1
- this는 window 객체를 참조합니다.
- 전역에서 선언된 변수와 함수는 자동으로 window에 속하게 됩니다.
#### 3-2
- this는 {} 이며, 빈 객체입니다.
- global은 브라우저의 window 역할을 대신합니다.
#### 3-3
- var로 선언된 전역 변수는 window 객체의 프로퍼티로 등록합니다. 따라서 모두 같은 값을 가집니다.
#### 3-4
- window.변수 = 값 형태로 직접 정의된 프로퍼티는 delete 가능합니다.
#### 3-5
- var로 만든 전역 변수는 delete로 지울 수 없습니다.
#### 3-6
- func(1)은 일반 함수 호출하며 브라우저에선 this와 window가 같습니다.
- obj.method(2)은 메서드 호출하며 this와 obj가 같습니다. 따라서 this는 함수 호출 방식에 따라 결정됩니다.
#### 3-7
- method 안에 this가 숨어져 있으며 이 this는 obj를 가르키고 있습니다.
#### 3-8
- this는 정의된 위치가 아닌, 호출된 위치에 의해 결정됩니다.
#### 3-9
- function도 각자의 this를 가지고 있습니다.
- 일반 호출이라면 this는 전역 객체입니다.
#### 3-10
- 05번 라인에 this가 that이라고 한다면 inner func에서도 outer func로 대신 가능합니다.
#### 3-11
- 화살표 함수는 arrow function이라고 하며 this를 자신이 선언된 시점의 상위 스코프에서 고정합니다.
- innerFunc의 this는 window가 됩니다.
#### 3-12
- 콜백 함수에서 사용하는 function에 의해 this가 결정됩니다.
- setTimeout, forEach, .addEventListener 들의 this를 결정한다.
#### 3-13
- new로 호출 시 내부의 this는 새로 생성된 객체를 가리킵니다.
- return 없이 객체가 반환합니다.
#### 3-14
- call() 메서드는 첫 번째 인자를 this로 설정하여 함수 실행합니다.
- 즉 func의 this를 {x: 1}로 해라를 의미합니다.
#### 3-15
- this.a는 4가 되어 출력됩니다.
- call()을 통해 객체 외부의 다른 this 값으로 호출 가능
#### 3-16
- apply 매서드는 call매서드와 기능적으로 동일하며 두번쨰 인자를 배열받아 호출할 함수의 매개변수로 지정하는 점이 차이가 있습니다.
#### 3-17
- push의 this를 obj가 정해주며 유사배열 객체이기만 하면 push는 동작합니다.
#### 3-18
- arguments, NodeList는 배열이 아닌 유사 배열 객체입니다.
#### 3-19
- map은 새로운 array를 만들어 냅니다.
- 문자열은 불변 객체이므로 push() 등 변형 메서드는 사용할 수 없습니다.
#### 3-20
- Array.from(obj)는 내부적으로 length를 기준으로 인덱스를 복사해 새로운 배열을 생성합니다.
#### 3-21
- 06번 라인에 this1는 person의 this를 정해주며 name하고 gender를 사용합니다.
- call은 인자를 개별적으로, apply는 배열로 전달합니다.
#### 3-22
- 배열을 순회하며 현재 값이 기존 max/min보다 크거나 작으면 교체합니다.
#### 3-23
- apply(null, numbers)는 배열을 함수 인자로 풀어서 전달합니다.
#### 3-24
- apply보다 가독성이 뛰어나고, 더 직관적입니다.
#### 3-25
- bind()는 this를 고정할 뿐만 아니라 인자를 선결합 할 수 있습니다.
#### 3-26
- bind()는 새로운 함수 객체를 반환합니다.
- .name은 실제 호출 동작에는 영향이 없습니다.
#### 3-27
- bind는 this가 유지되는 새로운 함수를 만들며 call은 즉시 실행하며 this를 지정합니다.
#### 3-28
- 콜백 함수 내부의 this는 호출 컨텍스트에 따라 바뀝니다.
#### 3-29
- 화살표 함수는 this를 바인딩 하지 않으며 외부 스코프의 this를 가져옵니다.
#### 3-30
- forEach, map은 콜백의 this를 제어할 수 있게 thisArg를 지원합니다.
#### 3-31
- 명시적 바인딩 없이 콜백의 this를 함수 밖의 객체로 유지합니다.


## Chapter 4
#### 4-1
- setInterval은 일정 시간 간격으로 함수를 반복 실행합니다.
- call back function은 function정의 후 setInterval에 function을 넘겨줍니다.
#### 4-2
- 콜백 함수를 외부에 cbFunc로 정의해 재사용 구조로 변경합니다.
#### 4-3
- map이라는 function이며 자기만의 this를 가집니다.
- 10을 cureent value에 넣고 index=0입니다.
- 매 요소마다 currentValue, index를 출력합니다.
#### 4-4
- value자리에 index index자리에 currentvalue가 있습니다. 또한 바꿔서 사용하여도 index자리에 10 currentvalue에는 1입니다.
- map의 콜백은 (currentValue, index, array)가 맞습니다.
#### 4-5
- thisArg를 작성해주면 callback function의 this는 thisArg로 수행하라는것을 나타냅니다.
-  A || B 의 의미는 A가 없으면 B를 수행, A가 있으면 A를 수행한다는 의미를 가집니다.
#### 4-6
- setTimeout은 300ms이후에 console.log(this)를 수행하는 의미를 가집니다.
-.addEventListener은 click이 들어오면 function을 수행합니다.
#### 4-7
- obj.logValues(1, 2)에서는 this는 obj이며 obj의 method로 사용됩니다.
- forEach(obj.logValues)는 그냥 함수로 전달하며 this는 window입니다.
#### 4-8
- setTimeout(callback)에서도 obj1.name이 정확히 출력됩니다.
- self는 obj1이고 func: 이후 한 묶음이 obj1의 this입니다.
#### 4-9
- this를 사용하지 않고 obj1.name 직접 참조하며 obj1.func가 사라지면 참조가 깨지는 현상이 나타납니다.
#### 4-10
- obj1.func.call(obj3)은 obj1의 func안에 this를 가져오며 obj1.name 출력 후, 반환값이 없으니 callback3도 undefined합니다.
- obj2.func()는 즉시 실행이라 obj1.name 로그 후, callback2는 undefined 합니다.
#### 4-11
- bind는 this를 원하는 객체에 고정시키고 각각 obj1, obj2의 name 출력합니다.
#### 4-12
- setTimeout은 타이머 설정이외에 하는게 없습니다.
- setTimeout(amycallback,1000)일때 webAPI에다가 callback을 넘겨주고 1000ms합니다.
#### 4-13
- 콜백 함수를 분리해서 중첩 감소
- 여전히 타이밍 제어를 외부에서 하므로 흐름 제어가 명확하지 않습니다.
#### 4-14
- resolve안에 status가 pending이면 fulfilled로 바뀝니다.
- reject안에 status가 pending이면 rejected로 바뀝니다.
- 이것등을 resolve를 한번 수행하면 reject는 수행하지 않습니다.
- 각 단계에서 resolve를 통해 다음 단계로 데이터 전달합니다.
#### 4-15
- 앞서 설명한 4-14부분을 클로저를 사용하여 가독성을 높이고 반복적인 내용을 함수화 하여 짧게 표현했습니다.
#### 4-16
- yield는 중간 결과를 외부에 넘기고 next() 호출될 때 다시 진행
- generator는 비동기 순서를 수동으로 제어할 수 있으나, .next() 호출을 외부에서 해야 해서 복잡성을 가집니다.
#### 4-17
- 동기 코드처럼 읽히는 비동기 처리를 하며 await로 비동기 흐름을 직관적으로 제어합니다.


## Chapter 5
#### 5-1
- 내부 함수 inner()가 외부 함수의 변수 a를 참조하면서 클로저 형성지만 inner를 반환하지 않기 떄문에 실행 후 a는 없어집니다.
#### 5-2
- outer() 호출 시 a = 1, inner()는 바로 실행되어 a는 2로 증가합니다.
- 결과 2가 반환되며 outer2에 저장되어 콘솔에 출력합니다.
#### 5-3
- outer()가 실행되며 a = 1 선언되고, inner 함수 자체가 반환되며 outer2는 inner를 참조하게 되고 a는 그대로 함수의 스코프 내에 유지됩니다.
- outer2() 두번 호출할 때마다 a는 1씩 증가하여 2,3을 출력합니다.
#### 5-4
- setInterval에서 inner()는 클로저이며, a 값을 참조합니다. 1초마다 a를 1씩 증가시키고 10이 되면 종료합니다.
- addEventListener 안의 callback도 클로저로서 count를 기억하고 있습니다.
#### 5-5
- 메모리 누수 방지 및 GC는 가시적 참조가 없을 때만 객체가 해제됩니다.
#### 5-6
- 배열 요소마다 li 요소를 생성하고 각각에 click 이벤트를 부착하였으며, fruit은 각 콜백의 고유한 클로저 환경으로 나타납니다. 또한 fruit 값을 alert로 출력합니다.
#### 5-7
- alertFruit는 외부에서 정의된 단일 함수이니 매개변수 fruit을 필요로 합니다.
- addEventListener('click', alertFruit)는 클릭 이벤트에서 fruit 인자를 넘기지 않으며 undefined 출력합니다.
- 이 예제는 함수를 참조만 하고 인자를 넘기지 않으면 클로저를 통해도 값이 유지되지 않습니다.
#### 5-8
- bind(null, fruit)은 새로운 함수를 만들어 fruit 값을 첫 번째 인자로 고정됩니다.
- 장점은 fruit값이 바뀌지 않으며 bind()는 this와 무관하므로 null합니다. 즉 바인딩된 함수는 클로저처럼 외부 값을 고정해서 사용합니다.
#### 5-9
- alertFruitBuilder(fruit)는 클릭 이벤트에 사용할 새로운 클로저를 생성하며 각 fruit값이 자신마의 클로저에 생성되어 루프 스코프가 안전하게 유지됩니다.
#### 5-10
- this를 통해 fuel, moved 관리합니다.
- car 변수에 객체를 직접 할당했습니다. run 메서드를 실행할 때마다 car객체의 fuel, moved값이 변하게 했습니다.
#### 5-11
- createcar함수를 실행함으로써 객체를 생성합니다. 또한 반환 객체가 내부 상태에 접근할 수 있도록 클로저로 구성되어있습니다.
- 이 구조는 스코프 체인을 활용한 은닉 구조와 일치합니다.
#### 5-12
- bind의 this는 null로 설정합니다. 또한 함수에서 지역변수 및 내부함수 등을 생성합니다.
- return한 변수들은 공개 멤버가 되고, 그렇지 않은 변수들은 비공개 멤버가 됩니다.
#### 5-13
- add.bind(null, ...)은 앞부분 인자를 고정한 새로운 함수 반환합니다.
#### 5-14
- addPartial뿐 아니라 dog.greet처럼 this 바인딩 보존이 가능합니다.
- 두번째 인자 인후부터는 미리 적용할 인자들을 전달하고 반환할 함수에서는 다시 나머지 인자들을 받아 이들을 한데 모아 원본 함수를 호출합니다.
#### 5-15
- partial2()는 자유롭게 중간 인자를 나중에 전달할 수 있으며 여전히 this 바인딩은 유지되고, 문자열을 부분적으로 나중에 전달합니다.
#### 5-16
- debounce는 연속해서 발생하는 이벤트에 대해 마지막 이벤트만 처리되게 합니다.
- 이벤트 진행할 때마다 setTimeout을 초기화함으로써 일정 시간동안의 연속 입력을 무시합니다.
- clearTimeout은 기존 등록된 타이머를 취소하므로 비동기 작업을 덮어쓰는 방식으로 구현됩니다.
#### 5-17
- curry3는 2개의 인자를 순차적으로 1개씩 전달하는 커링 함수를 반환합니다.
- 클로저를 통해 외부 변수(a)를 기억하고 이후 인자(b)를 받아 처리하는 구조로, 클로저와 고차 함수의 결합형태 입니다.
#### 5-18
- curry5(Math.max)를 통해 5개의 인자를 순차적으로 1개씩 받을 수 있도록 커링한 함수 생성합니다.
- 의도적으로 인자 순서를 통제하여 부분 적용이 가능하게 하는 함수형 구조입니다.

## Chapter 6
#### 6-1
- person은 생성자 함수 역할을 합니다.
- 1~3까지의 function을 constructor라고 합니다.
#### 6-2
- 함수도 객체이므로 프로퍼티를 가질 수 있으며 prototype은 생성자 함수의 속성을 뜻하고 인스턴스가 상속받는 공간이라고 합니다.
- Constructor.prototype.method1과 property1은 인스턴스가 직접 갖는 게 아니라 prototype 체인을 접근합니다.
#### 6-3 
- 배열 인스턴스는 constructor 프로퍼티를 통해 자신의 생성자 함수 Array를 참조한다고 생각합니다.
- arr.constructor(3, 4) 과 Array(3. 4)는 동일합니다.
#### 6-5
- Array prototype에 constructor이 존재하기 떄문에 Array를 가르키고 있다 즉 덮어쓸 수 있습니다.
- instanceof 연산자는 실제 prototype 기준으로 동작합니다.
- P1Proto는 person의 prototype의 object를 가르킵니다.
- 다섯 객체 모두 Person을 통해 만들어진 동일한 구조입니다.
#### 6-6
- iu.getName()은 '바로 지금'이라는 의미를 가지며, 인스턴스 메서드를 우선 참조합니다.
#### 6-7
- hasOwnProperty()을 수행하면 Object.prototype에 있는 것을 수행합니다.
- Array.prototype object의 instance는 __proto_입니다.
#### 6-8
- [1,2].tostring()은 object.prototype.tostring을 사용할 수 없습니다. 또한 내부 [[Class]]값을 변환하여 정확한 타입 식별로 사용합니다. 추가적으로 join(',')으로 반환하기도 합니다.
#### 6-9
- Object.prototype.getEntries는 객체의 고유(key-value) 프로퍼티를 배열로 반환하는 함수입니다.
- data 배열에 다양한 타입을 넣고 .getEntries() 호출합니다. 결과적으로 객체, 배열, 문자열만 키-값을 반환하고, 나머지 타입은 빈 배열 []을 의미합니다.
- Object.prototype 확장은 모든 객체에 영향을 주는것을 주의해야합니다.
#### 6-10
- args는 argument를 array형태로 만들어서 저장합니다.
- Grade의 instance g가 배열 instance가 사용할 수 있는 function을 사용하게 하려면 Grade.prototype=[]을 Array.instance를 만들거나 Grade 자체를 Array로부터 확장하는 ES6 class 사용하는 방법이 있을거 같으며 후자 부분이 직관적으로는 좋은 코드입니다.
- Array.prototype.slice.call(arguments)로 진짜 배열로 변환합니다.
- Grade는 일반 객체 이지만 배열처럼 동작합니다. 그 이유는 this[0],this[1]과 length를 가지고 있기 때문입니다.


## Chapter 7
#### 7-1
- new Rectangle(3, 4) 수행하면 01-04라인이 수행하며 width는 3 height는 4가 들어갑니다.
- this 안에 width와height가 들어가 있으며 이것을 rect1d에 넣어준다 즉 rect1도 this를 가르키고 있습니다.
- Rectangle.isRectangle(rect1)는 수행을 시킬수 있으며 rect1.isRectangle(rect1)는 rectangle.prorotype에 없기 때문에 오류가 납니다.
#### 7-2
- Grade.prototype은 배열로 설정하지만 생성자 함수 내부는 일반 객체로 초기화합니다.
- g는 Grade의 인스턴스입니다.
#### 7-3
- Grade.prototype = []가 만들어 짐에 의해 Array와 Array.prototype이 만들어 집니다.
- g.push(90)는 length가 존재하여 정상 동작을 합니다. 하지만 g.push(70)는 length가 없으므로 length=1로 간주합니다. 즉 length 삭제시 undefined는 0에서1로 가준됩니다.
#### 7-4
- g.push(90)는 g.length = 2에서2번 인덱스에 삽입하며, g.push(70)는 배열 prototype 길이 따라 length = 4 는 4번 인덱스부터 들어갑니다.
- g는 프로토타입 배열의 특성을 따라 push로도 작동합니다.
#### 7-5
- Rectangle 인스턴스 구조 (rect)이며 rect.getArea() 호출 시 Rectangle.prototype.getArea에서 찾아 3*4=12 입니다.
- Square 인스턴스 구조 (sq)이고 getArea()는 Square.prototype.getArea에 있으며 5*5=25 입니다.
#### 7-6
- Rectangle과 구조는 비슷하지만 코드 중복되어 있습니다.
#### 7-7
- Rectangle.call(this, width, width)는 Rectangle 생성자 내부 코드를 Square의 this에 적용하며 또한 this는 sq를 가리키고 sq = { width: 5, height: 5 } 가 됩니다.
- Square.prototype이 Rectangle 인스턴스이며 new Rectangle()로 가면서 width: 3, height: 4가 들어가 있는 proto입니다.
- 문제점으로는 constructor 깨지며 메모리가 비효율적입니다.
#### 7-8
- SubClass.prototype는 new SuperClass()로 연결됩니다.하지만 SubClass.prototype 자체는 SuperClass 인스턴스입니다.
- Object.freeze(SubClass.prototype)을 사용해
하위 prototype이 변경되지 않도록 보호를 합니다.
#### 7-9
- SuperClass의 prototype을 Bridge의 prototype으로 설정하며 추가적으로 new Bridge() 결과가 SubClass.prototype이 됩니다.
- sq = new Square(5)는  Rectangle.call(this, width, width) 실행되며 this = sq 는 { width: 5, height: 5 }나타납니다.
- new SuperClass()를 쓰지 않음으로 instance값이 섞이지 않습니다.
#### 7-10
-  proto가 Rectangle.prototype 가르키며 Rectangle의 메서드 getArea()도 프로토타입 체인 상에서 연결됩니다.
- sq.getArea()가 sq.proto.getArea()를 가르키고 이것이 Rectangle.prototype.getArea()를 가르킵니다.
#### 7-11
- Square.prototype.constructor가 Square이며  constructor가 가르킵니다. 또한 Square.prototype.constructor가 Square을 보도록 하여 인스턴스에서 .constructor를 호출하면 자신을 정확히 참조합니다.
- 핵심은 constructor 복원하면서 생성자 인식 정확성이 높아 졌습니다.
#### 7-12
- Bridge라는 빈 함수를 통해 prototype 체인만을 가져오며 인스턴스를 만들지 않고 수동으로 constructor 복원합니다.
- Object.create()는 새 객체를 만들면서 Prototype만 SuperClass의 prototype에 연결합니다.
#### 7-13
- Object.create(SuperClass.prototype)는 Square.prototype는 proto.Rectangle.prototype를 가르킵니다.
- subMethods사용하면서 전달된것만 Square.prototype에 추가합니다. 또한 Object.freeze()는 Square.prototype을 변경 못 하도록 보호하며 확장을 방지 합니다.
#### 7-14
-  super function의 this는 self이고 self는 super을 불러준 function이며 self는 square의 instance에 해당하는 closer 변수입니다.
- propName 과 self를 클로저변수로 return되는 함수에 넣어줍니다.
- super("getArea")()를 실행한다면 Rectangle.prototype.getArea.call(this)과 같습니다.
- 따라서 prop이 함수가 아니면 prop은 return하며 함수이면 prop(arguments)를 수행시킵니다.
#### 7-15
- this.name을 인스턴스는 각각 ES5('es5'), ES6('es6')에 저장됩니다.
- 정적 메서드 내부에서 this는 클래스 자체를 가리키며,
ES5나 ES6 클래스 객체에는 name 프로퍼티가 없기 때문에 this.name 는 undefined을 가르키며 undefined staticMethod을 출력합니다.
#### 7-16
- class Rectangle {}처럼 직접 이름을 붙이는 대신해서 익명 클래스를 변수에 대입한 방식으로 Rectangle은 결국 constructor, getArea 메서드를 갖는 객체를 나타냅니다.
- extends는 Square는 Rectangle의 하위 클래스이며 super()는 Rectangle의 constructor(width, height)를 호출합니다.