import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import LinkWrapper from 'components/LinkWrapper'

import * as S from './style'

const AboutTemplate = () => (
   <S.Content>
      <LinkWrapper href="/">
         <CloseOutline size={32} />
      </LinkWrapper>

      <S.Heading>My Trips</S.Heading>
      <S.Body>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            voluptas, tenetur ea ipsum perferendis nihil odit amet quis minus
            eaque voluptates soluta hic quibusdam eveniet magnam sit distinctio
            rerum? Autem?
         </p>
      </S.Body>
   </S.Content>
)

export default AboutTemplate
