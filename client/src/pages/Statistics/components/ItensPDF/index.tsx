import { isArray, isString } from '../../../../interfaces/typeGuards'
import { SITUATION_OPTIONS } from '../../../Inspection/components/constants/mocks'
import { InspectionItem } from '../../repositories/getExportItemsRepository'
import { InspectionInformation } from '../../services'
import * as S from './styles'

type ItemSituation =
  | 'incomplete'
  | 'as_per'
  | 'non_compilant'
  | 'not_applicable'

interface TrailItem {
  text: string
  pageNumber: number
  id: string
}

interface Item {
  id: string
  situation: ItemSituation
  category: string
  description: string
  documents?: string | null
  observations?: string | null
  trail: TrailItem[] | string
}

interface Information {
  final_date: string
  start_date: string
  responsable: string
  email: string
  record_link: string
  participants: string
}

export interface ItemsExport {
  itens: Item[]
}

interface ItensPDFProps {
  items: InspectionItem[]
  inspectionInformation: InspectionInformation
  componentRef: React.MutableRefObject<HTMLDivElement | null>
}

export function ItensPDF({
  items,
  inspectionInformation,
  componentRef,
}: ItensPDFProps) {
  return (
    <S.Container ref={componentRef}>
      <S.TitleInspection>
        Análise de itens da Inspeção - {inspectionInformation.name}
      </S.TitleInspection>
      <S.LabelText>
        <b>Início da Inspeção:</b> {inspectionInformation.createdAt}
      </S.LabelText>
      <S.LabelText>
        <b>Término da inspeção:</b> {inspectionInformation.finishedAt}
      </S.LabelText>
      {/* <S.LabelText>
        <b>Responsável:</b> {inspectionInformation.responsable}
      </S.LabelText>
      <S.LabelText>
        <b>Contato:</b> {inspectionInformation.email}
      </S.LabelText>
      <S.LabelText>
        <b>Gravação disponível em:</b> {inspectionInformation.record_link}
      </S.LabelText>
      <S.LabelText>
        <b>Participantes:</b> {inspectionInformation.participants}
      </S.LabelText> */}
      <S.Description>
        Abaixo, você pode visualizar a análise dos itens do artefato{' '}
        {inspectionInformation.name}.
      </S.Description>

      {items.map((item) => {
        const formattedSituation = SITUATION_OPTIONS.find(
          (situation) => situation.value === item.situation,
        )?.label.toLowerCase()

        return (
          <S.WrapperItem key={item.itemIndex}>
            <S.WrapperTitleAndSituation>
              <S.TitleItem>Item {item.itemIndex.padStart(2, '0')}</S.TitleItem>
              <S.Situation status={item.situation}>
                {formattedSituation}
              </S.Situation>
            </S.WrapperTitleAndSituation>
            {Boolean(item.category) && (
              <S.LabelText>
                <b>Categoria:</b> {item.category}
              </S.LabelText>
            )}

            <S.LabelText>
              <b>Descrição:</b> {item.description}
            </S.LabelText>

            {/* {Boolean(item.documents) && (
              <S.LabelText>
                <b>Documento marcados (s):</b>
                {item.documents}
              </S.LabelText>
            )} */}
            {isString(item.trail) && Boolean(item.trail) && (
              <S.LabelText>
                <b>Rastro:</b>
                <div dangerouslySetInnerHTML={{ __html: item.trail }} />
              </S.LabelText>
            )}

            {Boolean(item.trail) &&
              isArray(item.trail) &&
              item.trail.map((trail, index) => (
                <S.LabelText key={trail.id}>
                  <b>Rastro {String(index + 1).padStart(2, '0')}:</b>{' '}
                  {trail.text}
                </S.LabelText>
              ))}

            {Boolean(item.observations) && (
              <S.LabelText>
                <b>Observações: </b>
                {item.observations}
              </S.LabelText>
            )}
          </S.WrapperItem>
        )
      })}
    </S.Container>
  )
}
