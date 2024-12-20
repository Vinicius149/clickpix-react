import { cx } from '@/common/cx'

export const OrderSvgIcon = ({ disabled }: { disabled: boolean }) => (
  <svg
    className={cx(!disabled ? 'fill-[#133a6f]' : 'fill-zinc-200')}
    focusable="false"
    aria-hidden="true"
    viewBox="0 0 24 24"
    data-testid="ReceiptIcon"
    width={22}
    height={22}
  >
    <path d="M18 17H6v-2h12zm0-4H6v-2h12zm0-4H6V7h12zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2z"></path>
  </svg>
)
