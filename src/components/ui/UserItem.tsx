'use client'

export default function UserItem() {
  return <div className="flex items-center justify-between gap-2 border rounded-[8px] p-4">
    <div className="avatar rounded-full min-h-12 min-w-12 bg-emerald-500 text-white font-[700]
    flex items-center justify-center">
      <p>KS</p>
    </div>
      <div className="grow">
        <p className="text-[16px] font-bold">Kim Silva</p>
        <p className="text-[12] text-neutral-500">hello@kim.com</p>
      </div>
  </div>
}