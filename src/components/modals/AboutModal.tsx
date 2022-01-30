import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const AboutModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Liáu-kái" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-md text-gray-500 dark:text-gray-300">
        Nā kám-kak bē-bái sńg, chhiáⁿ lâi kā gún kià-hù chi-chhî:{' '}
        <a
          href="https://www.zeczec.com/projects/taibun-kesimi"
          className="underline font-bold"
          target="_blank"
          rel="noreferrer"
        >
          Tâi-bûn Ke-si-mī
        </a>
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-300 py-3">
        This is modified from an open source clone of the game Wordle -{' '}
        <a
          href="https://github.com/hannahcode/wordle"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
        and{' '}
        <a
          href="https://www.powerlanguage.co.uk/wordle/"
          className="underline font-bold"
        >
          play the original here
        </a>
      </p>
    </BaseModal>
  )
}
