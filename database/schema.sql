set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "users" (
  "userId" SERIAL PRIMARY KEY,
  "username" varchar,
  "passwordHash" varchar,
  "createdAt" varchar,
  "updatedAt" varchar
);

CREATE TABLE "expenses" (
  "expenseId" SERIAL PRIMARY KEY,
  "userId" int,
  "category" varchar,
  "amount" numeric,
  "expenseDate" date,
  "recurringDate" date,
  "createdAt" varchar,
  "updatedAt" varchar
);

ALTER TABLE "expenses" ADD FOREIGN KEY ("userId") REFERENCES "users" ("userId");
