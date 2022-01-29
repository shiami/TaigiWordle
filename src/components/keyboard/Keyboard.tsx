import { KeyValue } from '../../lib/keyboard'
import { getStatuses } from '../../lib/statuses'
import { Key } from './Key'
import { useEffect } from 'react'

type Props = {
  onChar: (value: string) => void
  onDelete: () => void
  onEnter: () => void
  guesses: string[]
}

export const Keyboard = ({ onChar, onDelete, onEnter, guesses }: Props) => {
  const charStatuses = getStatuses(guesses)

  const onClick = (value: KeyValue) => {
    if (value === 'ENTER') {
      onEnter()
    } else if (value === 'DELETE') {
      onDelete()
    } else {
      onChar(value)
    }
  }

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.code === 'Enter') {
        onEnter()
      } else if (e.code === 'Backspace') {
        onDelete()
      } else {
        const key = e.key.toUpperCase()
        if (
          key.length === 1 &&
          ((key >= 'A' &&
            key <= 'Z' &&
            key !== 'Q' &&
            key !== 'W' &&
            key !== 'R' &&
            key !== 'Y' &&
            key !== 'D' &&
            key !== 'F' &&
            key !== 'Z' &&
            key !== 'X' &&
            key !== 'V') ||
            (key >= '0' && key <= '9'))
        ) {
          onChar(key)
        }
      }
    }
    window.addEventListener('keyup', listener)
    return () => {
      window.removeEventListener('keyup', listener)
    }
  }, [onEnter, onDelete, onChar])

  return (
    <div>
      <div className="flex justify-center mb-1">
        <Key value="1" onClick={onClick} status={charStatuses['1']} />
        <Key value="2" onClick={onClick} status={charStatuses['2']} />
        <Key value="3" onClick={onClick} status={charStatuses['3']} />
        <Key value="4" onClick={onClick} status={charStatuses['4']} />
        <Key value="5" onClick={onClick} status={charStatuses['5']} />
        <Key value="7" onClick={onClick} status={charStatuses['7']} />
        <Key value="8" onClick={onClick} status={charStatuses['8']} />
        <Key value="9" onClick={onClick} status={charStatuses['9']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="E" onClick={onClick} status={charStatuses['E']} />
        <Key value="T" onClick={onClick} status={charStatuses['T']} />
        <Key value="U" onClick={onClick} status={charStatuses['U']} />
        <Key value="I" onClick={onClick} status={charStatuses['I']} />
        <Key value="O" onClick={onClick} status={charStatuses['O']} />
        <Key value="P" onClick={onClick} status={charStatuses['P']} />
      </div>
      <div className="flex justify-center mb-1">
        <Key value="A" onClick={onClick} status={charStatuses['A']} />
        <Key value="S" onClick={onClick} status={charStatuses['S']} />
        <Key value="G" onClick={onClick} status={charStatuses['G']} />
        <Key value="H" onClick={onClick} status={charStatuses['H']} />
        <Key value="J" onClick={onClick} status={charStatuses['J']} />
        <Key value="K" onClick={onClick} status={charStatuses['K']} />
        <Key value="L" onClick={onClick} status={charStatuses['L']} />
      </div>
      <div className="flex justify-center">
        <Key width={65.4} value="ENTER" onClick={onClick}>
          Ioh
        </Key>
        <Key value="C" onClick={onClick} status={charStatuses['C']} />
        <Key value="B" onClick={onClick} status={charStatuses['B']} />
        <Key value="N" onClick={onClick} status={charStatuses['N']} />
        <Key value="M" onClick={onClick} status={charStatuses['M']} />
        <Key width={65.4} value="DELETE" onClick={onClick}>
          Thâi
        </Key>
      </div>
    </div>
  )
}
