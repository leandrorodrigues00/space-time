export function EmptyMemories() {
  return (
    <div className="flex flex-1 items-center justify-center p-16">
      <p className="w-[22.5rem] text-center leading-relaxed">
        {"You haven't registered any memories yet, start "}
        <a href="" className="underline hover:text-gray-50">
          creating them now
        </a>
        !
      </p>
    </div>
  )
}
