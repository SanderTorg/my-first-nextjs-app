function TodoListSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className="h-6 w-full animate-pulse rounded bg-gray-300"
        ></div>
      ))}
    </div>
  );
}

export default TodoListSkeleton;
