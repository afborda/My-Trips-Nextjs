import LinkWrapper from 'components/LinkWrapper'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

import * as S from './style'

type ImageProps = {
   url: string
   height: number
   width: number
}

export type PlacesTemplateProps = {
   place: {
      slug: string
      name: string
      description: {
         html: string
      }
      galery: ImageProps[]
   }
}

export default function PlacesTemplate({ place }: PlacesTemplateProps) {
   return (
      <>
         <LinkWrapper href="/">
            <CloseOutline size={32} aria-label="Voltar para o mapa" />
         </LinkWrapper>
         <S.Wrapper>
            <S.Container>
               <S.Heading>{place.name}</S.Heading>

               <S.Body
                  dangerouslySetInnerHTML={{ __html: place.description.html }}
               />

               <S.Gallery>
                  {place.galery.map((image, index) => (
                     <img
                        key={`photo-${index}`}
                        src={image.url}
                        alt={place.name}
                     />
                  ))}
               </S.Gallery>
            </S.Container>
         </S.Wrapper>
      </>
   )
}
