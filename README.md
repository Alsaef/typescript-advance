# TypeScript Type Narrowing (বাংলা ডকুমেন্টেশন)

## Type Narrowing কী?

TypeScript এ **Type Narrowing** মানে হলো—কোডের কোনো নির্দিষ্ট জায়গায় TypeScript বুঝতে পারে যে একটি ভেরিয়েবল আসলে কোন **specific type** এর।

সহজভাবে বললে,

> **বড় টাইপ থেকে ছোট/নির্দিষ্ট টাইপে নিয়ে আসার প্রক্রিয়াই Type Narrowing।**

এটা খুবই দরকারি কারণ এতে করে:

* Runtime error কমে
* Autocomplete ভালো কাজ করে
* Code বেশি safe ও readable হয়

---

## কেন Type Narrowing দরকার?

```ts
function printLength(value: string | number) {
  console.log(value.length); // ❌ Error
}
```

এখানে `value` হতে পারে `string` অথবা `number`।

* `string` এর `length` আছে
* `number` এর `length` নেই

তাই TypeScript নিশ্চিত না হয়ে error দেয়।

Type Narrowing ব্যবহার করে আমরা এই সমস্যা সমাধান করি।

---

## 1️⃣ typeof দিয়ে Type Narrowing

সবচেয়ে common narrowing হলো `typeof`।

```ts
function printLength(value: string | number) {
  if (typeof value === "string") {
    console.log(value.length); // ✅ OK
  } else {
    console.log(value); // number
  }
}
```

`typeof` যেসব টাইপে কাজ করে:

* string
* number
* boolean
* undefined
* object
* function

---

## 2️⃣ Truthy / Falsy Narrowing

TypeScript বুঝতে পারে কোনো value truthy না falsy।

```ts
function printName(name?: string) {
  if (name) {
    console.log(name.toUpperCase()); // ✅ string
  }
}
```

Falsy value গুলো:

* ""
* 0
* null
* undefined
* false

---

## 3️⃣ Equality Narrowing (=== / !==)

```ts
function checkValue(x: string | number, y: string | boolean) {
  if (x === y) {
    // এখানে x এবং y দুটোই string
    console.log(x.toUpperCase());
  }
}
```

TypeScript comparison দেখে টাইপ narrow করে ফেলে।

---

## 4️⃣ in Operator দিয়ে Narrowing

Object এর ক্ষেত্রে খুব useful।

```ts
type User = { name: string };
type Admin = { name: string; role: string };

function printUser(user: User | Admin) {
  if ("role" in user) {
    console.log(user.role); // Admin
  } else {
    console.log(user.name); // User
  }
}
```

---

## 5️⃣ instanceof দিয়ে Narrowing

Class বা built-in object এর জন্য ব্যবহার হয়।

```ts
function logDate(value: Date | string) {
  if (value instanceof Date) {
    console.log(value.getFullYear());
  } else {
    console.log(value.toUpperCase());
  }
}
```

---

## 6️⃣ Discriminated Union (Best Practice 🔥)

একটা common property দিয়ে টাইপ আলাদা করা।

```ts
type Loading = { status: "loading" };
type Success = { status: "success"; data: string };
type ErrorState = { status: "error"; message: string };

type State = Loading | Success | ErrorState;

function handleState(state: State) {
  switch (state.status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log(state.data);
      break;
    case "error":
      console.log(state.message);
  }
}
```

✅ এটা সবচেয়ে clean ও scalable approach।

---

## 7️⃣ Type Guard Function

নিজের custom narrowing function বানানো যায়।

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function printValue(value: unknown) {
  if (isString(value)) {
    console.log(value.toUpperCase());
  }
}
```

`value is string` → এটাকে বলে **Type Predicate**।

---

## সংক্ষেপে (Summary)

| Narrowing Method    | ব্যবহার                |
| ------------------- | ---------------------- |
| typeof              | primitive type         |
| if (value)          | null / undefined check |
| === / !==           | comparison             |
| in                  | object property        |
| instanceof          | class / object         |
| Discriminated Union | complex state handling |
| Type Guard          | custom logic           |

---

## উপসংহার

Type Narrowing TypeScript এর সবচেয়ে গুরুত্বপূর্ণ concept গুলোর একটি।

👉 ভালো Type Narrowing মানে:

* কম Bug
* Strong Type Safety
* Professional Code