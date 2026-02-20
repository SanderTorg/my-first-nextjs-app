"use client";

import { useState } from "react";
import { Todo } from "@/types/todoTypes";
import { motion, AnimatePresence } from "motion/react";
import TodoListItem from "../todo-list-item/TodoListItem";
import CreateTodoForm from "../todo-create-form/CreateTodoForm";

interface TodoListProps {
  todos: Todo[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      when: "beforeChildren",
    },
  },
};

type FilterType = "all" | "active" | "completed";

export function TodoList({ todos }: TodoListProps) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<FilterType>("all");

  const completedCount = todos.filter((t) => t.completed).length;
  const activeCount = todos.length - completedCount;

  const filteredTodos = todos.filter((todo) => {
    const matchesSearch = todo.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter =
      filter === "all" ||
      (filter === "active" && !todo.completed) ||
      (filter === "completed" && todo.completed);
    return matchesSearch && matchesFilter;
  });

  const filterButtons: { label: string; value: FilterType; count: number }[] = [
    { label: "All", value: "all", count: todos.length },
    { label: "Active", value: "active", count: activeCount },
    { label: "Completed", value: "completed", count: completedCount },
  ];

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-100">
          My Todos
        </h2>
        <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          {completedCount} of {todos.length} tasks completed
        </p>
        {/* Progress bar */}
        <div className="mx-auto mt-4 h-2 w-full max-w-xs overflow-hidden rounded-full bg-zinc-200 dark:bg-zinc-700">
          <motion.div
            className="h-full rounded-full bg-emerald-500"
            initial={{ width: 0 }}
            animate={{
              width: `${todos.length > 0 ? (completedCount / todos.length) * 100 : 0}%`,
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </div>
      </div>

      <div className="mb-4">
        <CreateTodoForm></CreateTodoForm>
      </div>

      {/* Search + Filters */}
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Search */}
        <div className="relative w-full sm:max-w-xs">
          <svg
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search todos..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-zinc-200 bg-white py-2 pl-10 pr-4 text-sm text-zinc-900 shadow-sm placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder:text-zinc-500 dark:focus:border-zinc-600 dark:focus:ring-zinc-700"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex gap-1 rounded-lg bg-zinc-100 p-1 dark:bg-zinc-800">
          {filterButtons.map(({ label, value, count }) => (
            <button
              key={value}
              onClick={() => setFilter(value)}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                filter === value
                  ? "bg-white text-zinc-900 shadow-sm dark:bg-zinc-700 dark:text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-300"
              }`}
            >
              {label}
              <span className="ml-1.5 opacity-60">({count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Todo Grid */}
      <AnimatePresence mode="popLayout">
        {filteredTodos.length > 0 ? (
          <motion.section
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredTodos.map(
              ({ id, title, priority, dueDate, completed }) => (
                <motion.div key={id} variants={itemVariants} exit="exit" layout>
                  <TodoListItem
                    id={id}
                    title={title}
                    priority={priority}
                    dueDate={dueDate}
                    completed={completed}
                  />
                </motion.div>
              ),
            )}
          </motion.section>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-zinc-200 py-16 dark:border-zinc-700"
          >
            <svg
              className="mb-3 h-10 w-10 text-zinc-300 dark:text-zinc-600"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <p className="text-sm font-medium text-zinc-400 dark:text-zinc-500">
              No todos found
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-600">
              Try a different search or filter
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
