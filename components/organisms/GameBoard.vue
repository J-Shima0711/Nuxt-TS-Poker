<template>
  <div class="frame">
    <div :key="gameBoard.renderKey" class="board">
      <div class="result">
        <ResultArea
          v-if="gameBoard.status() === 'SHOW_RESULT'"
          :result="cpuResult"
        ></ResultArea>
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
          v-if="gameBoard.status() === 'SHOW_RESULT'"
          :hand-level="handOfCPU.level"
        >
          {{ handOfCPU.label }}
        </hand-name>
      </div>
      <div class="center-btn-area">
        <BaseButton
          :key="centerButtonText"
          class="center-button"
          @click="centerButtonAction"
        >
          {{ centerButtonText }}
        </BaseButton>
      </div>
      <div class="hand-name-area player-hand">
        <hand-name
          v-if="gameBoard.status() !== 'BEFORE_START'"
          :hand-level="handOfPlayer.level"
        >
          {{ handOfPlayer.label }}
        </hand-name>
      </div>
      <hand-area
        :cards="playerHand"
        :visible="playerCardVisible"
        :selectable="gameBoard.status() === 'EXCHANGE_TIME'"
        :selected-states="playerCardSelectedStates"
        @toggleSelect="toggleSelect"
      />
      <div class="result">
        <base-button
          v-if="gameBoard.status() === 'EXCHANGE_TIME'"
          class="sort-button"
          @click="sortHand"
        >
          Sort
        </base-button>
        <ResultArea
          v-if="gameBoard.status() === 'SHOW_RESULT'"
          :result="playerResult"
        ></ResultArea>
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
      cpuResult: {},
      playerResult: {},
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
          this.cpuResult = this.gameBoard.getResult(
            this.handOfCPU,
            this.handOfPlayer
          )
          this.playerResult = this.gameBoard.getResult(
            this.handOfPlayer,
            this.handOfCPU
          )
          this.gameBoard.progressGame()
          break
        case 'SHOW_RESULT':
          // this.gameBoard.collectCard(this.cpuHand, this.playerHand)
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
    sortHand(): void {
      this.resetSelectedStates()
      this.playerHand = this.gameBoard.sortHand(this.playerHand)
    },
  },
})
</script>

<style>
.frame {
  background-image: url('/images/wood.png');
  width: 560px;
  padding: 20px;
  box-sizing: border-box;
  border: 5px outset rgba(100, 100, 100, 0.5);
  border-top: 0;
  border-left: 0;
  border-radius: 15px;
  background-color: #6b3b00;
}
.board {
  width: 520px;
  padding: 5px;
  border: 5px inset rgba(100, 100, 100, 0.7);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-image: url('/images/board2.png');
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
.center-btn-area {
  height: 40px;
  display: flex;
  align-items: center;
}
.center-button {
  font-size: 28px;
  font-style: italic;
  color: #ffffff;
  margin: auto;
}
.result {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.sort-button {
  text-align: center;
  font-size: 28px;
  color: #ffffff;
  margin: auto;
}
</style>
