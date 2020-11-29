// 現在未使用

const sources: string[] = [
  './images/back.png',
  './images/C2.png',
  './images/C3.png',
  './images/C4.png',
  './images/C5.png',
  './images/C6.png',
  './images/C7.png',
  './images/C8.png',
  './images/C9.png',
  './images/C10.png',
  './images/CA.png',
  './images/CJ.png',
  './images/CK.png',
  './images/CQ.png',
  './images/D2.png',
  './images/D3.png',
  './images/D4.png',
  './images/D5.png',
  './images/D6.png',
  './images/D7.png',
  './images/D8.png',
  './images/D9.png',
  './images/D10.png',
  './images/DA.png',
  './images/DJ.png',
  './images/DK.png',
  './images/DQ.png',
  './images/H2.png',
  './images/H3.png',
  './images/H4.png',
  './images/H5.png',
  './images/H6.png',
  './images/H7.png',
  './images/H8.png',
  './images/H9.png',
  './images/H10.png',
  './images/HA.png',
  './images/HJ.png',
  './images/HK.png',
  './images/HQ.png',
  './images/S2.png',
  './images/S3.png',
  './images/S4.png',
  './images/S5.png',
  './images/S6.png',
  './images/S7.png',
  './images/S8.png',
  './images/S9.png',
  './images/S10.png',
  './images/SA.png',
  './images/SJ.png',
  './images/SK.png',
  './images/SQ.png',
]

export class Preloader {
  public isLoading: boolean
  private images: any[] = []
  constructor() {
    this.isLoading = true
    this.preload()
  }

  preload(): void {
    this.isLoading = true
    sources.forEach((src, i) => {
      this.images[i] = new Image().src = src
    })
    this.isLoading = false
  }
}
