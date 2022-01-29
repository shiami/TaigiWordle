import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Án-chóaⁿ sńg" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500">
        Pe̍h-ōe-jī pheng-jī ē-tàng ioh 6-pái. Ta̍k-pái ioh liáu, ta̍k-lia̍p jī-bó
        lóng ē hián-sī sek-chúi, piáu-sī lí ioh--ê kap tap-àn cheng-chha gōa
        chē.
      </p>

      <p className="text-sm text-gray-500">
        ------------------------------------------------------------------
      </p>

      <p className="text-sm text-gray-500">
        (Pe̍h-ōe-jī Su-ji̍p-sek: siaⁿ-tiāu phah sò͘-jī. Nā tē-1 tiāu kap tē-4 tiāu
        m̄ bián phah sò͘-jī. "O͘" phah "OO", "ⁿ" phah "NN".)
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="G" status="correct" />
        <Cell value="O" />
        <Cell value="A" />
        <Cell value="N" />
        <Cell value="2" />
      </div>
      <p className="text-sm text-gray-500">
        "G"--jī ū chhut-hiān tī tap-àn lāi-té, só͘-chāi mā chèng-khak.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="P" />
        <Cell value="H" />
        <Cell value="A" status="present" />
        <Cell value="N" />
        <Cell value="G" />
      </div>
      <p className="text-sm text-gray-500">
        "A"--jī ū chhut-hiān tī tap-àn lāi-té, m̄-koh ūi-tì m̄ tio̍h, tī pa̍t ūi.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="H" />
        <Cell value="H" />
        <Cell value="O" status="absent" />
        <Cell value="E" />
      </div>
      <p className="text-sm text-gray-500">
        "O"--jī BÔ chhut-hiān tī tap-àn lāi-té.
      </p>
    </BaseModal>
  )
}
