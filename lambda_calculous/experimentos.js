Number.prototype.log = function () {
  console.log(this);
};

Function.prototype.log = function () {
  console.log(this);
};

let r;

const I = (a) => a;

I;

r = I(3);
r.log();

r = I(I);
r.log();

const SELF = (f) => f(f);

r = SELF(I);
r.log();

const PRI = (a) => (b) => a;
r = PRI(7)(11);
r.log();

const ULT = (a) => (b) => b;
r = ULT(7)(11);
r.log();

const TROCA = (f) => (a) => (b) => f(b)(a);

r = TROCA(ULT)(70)(11);
r.log();

const ULT2 = (a) => (b) => TROCA(PRI)(a)(b);
r = ULT2(13)(20);
r.log();

// boolean TRUE e FALSE
const T = PRI;
const F = ULT;

T.inspect = () => "Verdadeiro (PRI)";
F.inspect = () => "Falso (ULT)";

T;
F;

// NOT (OPERADOR LOGICO DE NEGACAO)
const NOT = (a) => a(F)(T);

r = NOT(T);
r.log();

r = NOT(F);
r.log();

// LOGICAL OPERATOR AND (&)
// true && false => false
// true && true => true
// false && true => false
// false && false => false
const AND = (a) => (b) => a(b)(F);

r = AND(T)(T);
r.log();
r = AND(T)(F);
r.log();
r = AND(F)(T);
r.log();
r = AND(F)(F);
r.log();

// LOGICAL OPERATOR OR
// true or true => true
// true or false => true
// false or true => true
// false or false => false
const OR = (a) => (b) => a(T)(b);
r = OR(T)(T);
r.log();
r = OR(T)(F);
r.log();
r = OR(F)(T);
r.log();
r = OR(F)(F);
r.log();

// Logical equality
// true or true => true
// true or false => false
// false or true => false
// false or false => true
const EQ = (a) => (b) => a(b)(NOT(b));
r = EQ(T)(T);
r.log();
r = EQ(F)(F);
r.log();
r = EQ(T)(F);
r.log();
r = EQ(F)(T);
r.log();

// Logical XOR
// true or true => false
// true or false => true
// false or true => true
// false or false => false
const XOR = (a) => (b) => NOT(EQ(a)(b));
r = XOR(T)(T);
r.log();
r = XOR(F)(F);
r.log();
r = XOR(T)(F);
r.log();
r = XOR(F)(T);
r.log();
