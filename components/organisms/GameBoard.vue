<template>
  <div class="frame">
    <div class="board">
      <div class="result">
        <ResultArea v-show="gameBoard.status() === 'SHOW_RESULT'">
          {{ cpuResult }}
        </ResultArea>
      </div>
      <hand-area
        :cards="cpuHand"
        :visible="cpuCardVisible"
        :selectable="false"
        :selected-states="cpuCardSelectedStates"
        @toggleSelect="toggleSelect"
      />
      <div class="hand-name-area cpu-hand">
        <hand-name
          v-show="gameBoard.status() === 'SHOW_RESULT'"
          :hand-level="handOfCPU.level"
        >
          {{ handOfCPU.label }}
        </hand-name>
      </div>
      <BaseButton class="center-button" @click="centerButtonAction">
        {{ centerButtonText }}
      </BaseButton>
      <div class="hand-name-area player-hand">
        <hand-name
          v-show="gameBoard.status() !== 'BEFORE_START'"
          :hand-level="handOfPlayer.level"
        >
          {{ handOfPlayer.label }}
        </hand-name>
      </div>
      <hand-area
        :cards="playerHand"
        :visible="playerCardVisible"
        :selectable="true"
        :selected-states="playerCardSelectedStates"
        @toggleSelect="toggleSelect"
      />
      <div class="result">
        <ResultArea v-show="gameBoard.status() === 'SHOW_RESULT'">
          {{ playerResult }}
        </ResultArea>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HandArea from '~/components/molecules/HandArea.vue'
import { Card } from '~/entities/CardIF'
import { GameBoard } from '~/entities/GameBoard'
import { Hand } from '~/entities/hands/Hand'
import BaseButton from '~/components/atoms/BaseButton.vue'
import HandName from '~/components/atoms/HandName.vue'
import ResultArea from '~/components/atoms/ResultArea.vue'

type textCenterButton = 'Game Start' | 'Ready ?' | 'Exchange' | 'Next Game'
type textResult = 'WIN' | 'DRAW' | 'LOSE'

export default Vue.extend({
  components: {
    BaseButton,
    HandArea,
    HandName,
    ResultArea,
  },
  data() {
    return {
      gameBoard: {} as GameBoard,
      cpuHand: [] as Card[],
      playerHand: [] as Card[],
      cpuCardSelectedStates: [false, false, false, false, false] as const,
      playerCardSelectedStates: [
        false,
        false,
        false,
        false,
        false,
      ] as boolean[],
    }
  },
  computed: {
    handOfCPU(): Hand {
      return this.gameBoard.makeHand(this.cpuHand)
    },
    handOfPlayer(): Hand {
      return this.gameBoard.makeHand(this.playerHand)
    },
    cpuCardVisible(): boolean {
      return this.gameBoard.status() === 'SHOW_RESULT'
    },
    playerCardVisible(): boolean {
      return this.gameBoard.status() !== 'BEFORE_START'
    },
    selectedCards(): Card[] {
      return this.playerHand.reduce((acc, card, idx) => {
        if (this.playerCardSelectedStates[idx]) {
          acc.push(card)
        }
        return acc
      }, [] as Card[])
    },
    centerButtonText(): textCenterButton {
      switch (this.gameBoard.status()) {
        case 'BEFORE_START':
          return 'Game Start'
        case 'EXCHANGE_TIME':
          return this.selectedCards.length ? 'Exchange' : 'Ready ?'
        default:
          return 'Next Game'
      }
    },
    isBothHighCard(): boolean {
      return this.handOfCPU.level === 0 && this.handOfPlayer.level === 0
    },
    isDraw(): boolean {
      if (!this.isBothHighCard) {
        return this.handOfCPU.level === this.handOfPlayer.level
      }
      return (
        this.isBothHighCard &&
        this.handOfCPU.mostHighCard() === this.handOfPlayer.mostHighCard()
      )
    },
    cpuResult(): textResult {
      if (this.isDraw) return 'DRAW'
      if (this.isBothHighCard) {
        return this.handOfCPU.mostHighCard() > this.handOfPlayer.mostHighCard()
          ? 'WIN'
          : 'LOSE'
      }
      return this.handOfCPU.level > this.handOfPlayer.level ? 'WIN' : 'LOSE'
    },
    playerResult(): textResult {
      if (this.isDraw) return 'DRAW'
      if (this.isBothHighCard) {
        return this.handOfCPU.mostHighCard() < this.handOfPlayer.mostHighCard()
          ? 'WIN'
          : 'LOSE'
      }
      return this.handOfCPU.level < this.handOfPlayer.level ? 'WIN' : 'LOSE'
    },
  },
  created() {
    this.initialize()
  },
  methods: {
    initialize(): void {
      this.gameBoard = new GameBoard()
      this.cpuHand = this.gameBoard.dealCard(5)
      this.playerHand = this.gameBoard.dealCard(5)
    },
    centerButtonAction(): void {
      switch (this.gameBoard.status()) {
        case 'BEFORE_START':
          this.gameBoard.progressGame()
          break
        case 'EXCHANGE_TIME':
          this.exchangeCard()
          this.resetSelectedStates()
          this.gameBoard.progressGame()
          break
        case 'SHOW_RESULT':
          this.gameBoard.collectCard(this.cpuHand, this.playerHand)
          this.initialize()
          this.gameBoard.nextGame()
      }
    },
    exchangeCard(): void {
      if (!this.selectedCards.length) return
      const selectedCards: Card[] = []
      this.selectedCards.forEach((card) => {
        const target = this.playerHand.indexOf(card)
        if (target >= 0) {
          selectedCards.push(...this.playerHand.splice(target, 1))
        }
      })
      this.playerHand.push(...this.gameBoard.exchangeCard(selectedCards))
    },
    resetSelectedStates(): void {
      this.playerCardSelectedStates = [false, false, false, false, false]
    },
    toggleSelect(idx: number): void {
      if (this.gameBoard?.status() !== 'EXCHANGE_TIME') return
      this.$set(
        this.playerCardSelectedStates,
        idx,
        !this.playerCardSelectedStates[idx]
      )
    },
  },
})
</script>

<style>
.frame {
  background-image: url('/images/wood.jpg');
  width: 560px;
  padding: 20px;
  box-sizing: border-box;
}
.board {
  width: 520px;
  padding: 5px;
  border: 5px solid black;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url('/images/board.jpg');
}
.hand-name-area {
  height: 60px;
}
.cpu-hand {
  display: flex;
  flex-direction: row;
}
.player-hand {
  display: flex;
  flex-direction: row-reverse;
}

.center-button {
  text-align: center;
  font-size: 28px;
  font-style: italic;
  color: #ffffff;
  text-shadow: black;
}
.result {
  height: 100px;
}
</style>
