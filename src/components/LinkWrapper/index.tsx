import * as S from './style'
import Link from 'next/link'

type LinkWrapperProps = {
   href: string
   children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
   <S.Wrapper>
      <Link href={href}>{children}</Link>
   </S.Wrapper>
)

export default LinkWrapper
