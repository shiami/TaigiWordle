import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { solution, tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShare: () => void
}

export const StatsModal = ({
  isOpen,
  handleClose,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShare,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal title="Kiat-kó" isOpen={isOpen} handleClose={handleClose}>
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal title="Kiat-kó" isOpen={isOpen} handleClose={handleClose}>
      <StatBar gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900">
        Ioh liáu án-chóaⁿ
      </h4>
      <Histogram gameStats={gameStats} />
      <h4 className="text-lg leading-6 font-medium text-gray-900 py-4">
        Chàn-chō͘ chi-chhî
      </h4>
      <p className="text-md text-gray-500">
        Nā kám-kak bē-bái sńg, pài-thok chhiáⁿ lâi kā gún kià-hù:{' '}
        <a
          href="https://www.zeczec.com/projects/taibun-kesimi"
          className="underline font-bold"
          target="_blank"
          rel="noreferrer"
        >
          Tâi-bûn Ke-si-mī
        </a>
      </p>
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-1">
          <h4 className="text-lg leading-4 font-medium text-gray-900 py-4">
            ChhoeTaigi chhōe tap-àn
          </h4>
          <p className="text-md text-gray-500">
            <a
              href={`https://chhoe.taigi.info/search?method=basic&searchMethod=equals&spellingMethod=PojInput&spelling=${solution}`}
              className="underline font-bold"
              target="_blank"
              rel="noreferrer"
            >
              ChhoeTaigi: {`${solution}`}
            </a>
          </p>
          <div className="mt-5 sm:mt-6 columns-2 py-2">
            <div>
              <h5>Āu chi̍t tiâu</h5>
              <Countdown
                className="text-lg font-medium text-gray-900"
                date={tomorrow}
                daysInHours={true}
              />
            </div>
            <button
              type="button"
              className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:text-sm"
              onClick={() => {
                shareStatus(guesses, isGameLost)
                handleShare()
              }}
            >
              Hun-hióng
            </button>
          </div>
        </div>
      )}
    </BaseModal>
  )
}
