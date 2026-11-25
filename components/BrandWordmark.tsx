import { SITE_NAME } from '@/lib/constants'

export function BrandWordmark() {
  return (
    <span className="inline-flex items-center gap-2.5 font-sans text-[19px] font-semibold tracking-[-.2px]">
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round">
        <path d="M3.8 6.6C8.6 4.9 15.4 4.9 20.2 6.6" />
        <path d="M12 5.6V18.4c0 1.2.6 2 1.8 2.1" />
      </svg>
      {SITE_NAME}
    </span>
  )
}
