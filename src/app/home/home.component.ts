import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { gsap, Linear, Power1, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { DropDownAnimation } from '../shared/animation';



gsap.registerPlugin(ScrollTrigger,);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [DropDownAnimation]
})
export class HomeComponent implements OnInit {

  isOpen = false;

  @ViewChild('menu_top_left', { static: true }) menuTopLeft!: ElementRef<HTMLDivElement>
  @ViewChild('text1', { static: true }) text1!: ElementRef<HTMLDivElement>
  @ViewChild('menu_top_right', { static: true }) menuTopRight!: ElementRef<HTMLDivElement>
  @ViewChild('text2', { static: true }) text2!: ElementRef<HTMLDivElement>
  @ViewChild('text3', { static: true }) text3!: ElementRef<HTMLDivElement>
  @ViewChild('text4', { static: true }) text4!: ElementRef<HTMLDivElement>
  @ViewChild('text5', { static: true }) text5!: ElementRef<HTMLDivElement>
  @ViewChild('ficha', { static: true }) ficha!: ElementRef<HTMLDivElement>
  @ViewChild('menu', { static: true }) menu!: ElementRef<HTMLDivElement>
  @ViewChild('box3d', { static: true }) box3d!: ElementRef<HTMLDivElement>
  @ViewChild('arrow', { static: true }) arrow!: ElementRef<HTMLDivElement>
  @ViewChild('img1', { static: true }) img1!: ElementRef<HTMLDivElement>
  @ViewChild('img2', { static: true }) img2!: ElementRef<HTMLDivElement>
  @ViewChild('circle_blue', { static: true }) circleBlue!: ElementRef<HTMLDivElement>
  @ViewChild('bigCard1', { static: true }) bigCard1!: ElementRef<HTMLDivElement>
  @ViewChild('bigCard2', { static: true }) bigCard2!: ElementRef<HTMLDivElement>
  @ViewChild('aboutLeft', { static: true }) aboutLeft!: ElementRef<HTMLDivElement>
  @ViewChild('aboutRight', { static: true }) aboutRight!: ElementRef<HTMLDivElement>
  @ViewChild('sectionArrow1', { static: true }) sectionArrow1!: ElementRef<HTMLDivElement>
  @ViewChild('sectionArrow2', { static: true }) sectionArrow2!: ElementRef<HTMLDivElement>
  @ViewChild('itemFicha1', { static: true }) itemFicha1!: ElementRef<HTMLDivElement>
  @ViewChild('itemFicha2', { static: true }) itemFicha2!: ElementRef<HTMLDivElement>
  @ViewChild('itemFicha3', { static: true }) itemFicha3!: ElementRef<HTMLDivElement>
  @ViewChild('itemFicha4', { static: true }) itemFicha4!: ElementRef<HTMLDivElement>

  constructor() {}
  ngOnInit(): void {}



  ngAfterViewInit(): void {

    gsap.from(this.itemFicha1.nativeElement, {
      scrollTrigger: {
        trigger: this.itemFicha1.nativeElement,
        start: 'top 80%',
        end: 'top 70%',
        scrub: 1,

      },
      x: -300,
      duration: 0.5,
      ease: 'none',
      opacity: 0,
      delay: 0
    })
    gsap.from(this.itemFicha2.nativeElement, {
      scrollTrigger: {
        trigger: this.itemFicha2.nativeElement,
        start: 'top 80%',
        end: 'top 70%',
        scrub: 1,
      },
      x: -300,
      duration: 0.5,
      ease: 'none',
      opacity: 0,
      delay: 1
    })
    gsap.from(this.itemFicha3.nativeElement, {
      scrollTrigger: {
        trigger: this.itemFicha3.nativeElement,
        start: 'top 85%',
        end: 'top 70%',
        scrub: 1,
      },
      x: -300,
      duration: 0.5,
      ease: 'none',
      opacity: 0,
      delay: 2
    })
    gsap.from(this.itemFicha4.nativeElement, {
      scrollTrigger: {
        trigger: this.itemFicha4.nativeElement,
        start: 'top 90%',
        end: 'top 70%',
        scrub: 1
      },
      x: -300,
      duration: 0.5,
      ease: 'none',
      opacity: 0,
      delay: 2.5
    })




    gsap.from(this.sectionArrow2.nativeElement, {
      scrollTrigger: {
        trigger: this.sectionArrow2.nativeElement,
        start: 'top 95%',   
        end: 'top 40%',
        scrub: 1,
      },
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      delay: 1.5
    })
    gsap.from(this.sectionArrow1.nativeElement, {
      scrollTrigger: {
        trigger: this.sectionArrow1.nativeElement,
        start: 'top 80%',   
        end: 'top 40%',
        scrub: 1,
      },
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      delay: 0.5
    })



    gsap.from(this.aboutLeft.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutLeft.nativeElement,
        start: 'top 80%',   
        end: 'top 40%',
        scrub: 1,
      },
      x: -400,
      duration: 1.5,
      ease: Expo.easeOut,
      opacity: 0
    })
    gsap.from(this.aboutRight.nativeElement, {
      scrollTrigger: {
        trigger: this.aboutRight.nativeElement,
        start: 'top 80%',   
        end: 'top 40%',
        scrub: 2,
      },
      x: 400,
      duration: 2,
      ease: Expo.easeOut,
      opacity: 0
    })

    gsap.from(this.bigCard1.nativeElement, {
      scrollTrigger: {
        trigger: this.bigCard1.nativeElement,
        start: 'top 80%',
        end: 'top 40%',
        scrub: true
      },
      y: 200,
      duration: 0.5,
      ease: Expo.easeOut,
      opacity: 0
    })

    gsap.from(this.bigCard2.nativeElement, {
      scrollTrigger: {
        trigger: this.bigCard2.nativeElement,
        start: 'top 86%',
        end: 'top 66%',
        scrub: 1
      },
      y: 200,
      duration: 0.5,
      ease: Expo.easeInOut,
      opacity: 0,
      delay: 0.2
    })


    gsap.from(this.menuTopLeft.nativeElement, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 1.2
    })
    gsap.from(this.menuTopRight.nativeElement, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 2
    })

    gsap.from(this.text1.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      delay: 0.5
    })
    gsap.from(this.text2.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      delay: 0.8
    })
    gsap.from(this.text3.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      delay: 1.2
    })
    gsap.from(this.text4.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      delay: 1.4
    })
    gsap.from(this.text5.nativeElement, {
      duration: 1.5,
      opacity: 0,
      y: -50,
      stagger: 0.2,
      delay: 1.6
    })
    gsap.from(this.ficha.nativeElement.childNodes, {
      opacity: 0,
      duration: 1.5,
      scale: 0.8,
      delay: 0.4
    })
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5
    })

    gsap.to(this.box3d.nativeElement, {
      rotation: 360,
      duration: 8,
      ease: Linear.easeNone,
      repeat: -1,
    })

    var tlArrow = gsap.timeline({ repeat: -1 });
    tlArrow.to(this.arrow.nativeElement, { duration: 5, ease: Power1.easeInOut, y: 30 })
      .to(this.arrow.nativeElement, { duration: 5, ease: Power1.easeInOut, y: 0 });
    gsap.from(this.arrow.nativeElement, { opacity: 0, duration: 8 })

    var tlImg1 = gsap.timeline({ repeat: -1 });
    tlImg1.to(this.img1.nativeElement, { duration: 1.5, ease: Power1.easeInOut, y: 30 })
      .to(this.img1.nativeElement, { duration: 1.5, ease: Power1.easeInOut, y: 0 });
    gsap.from(this.img1.nativeElement, { opacity: 0, duration: 8 })


    var tlImg2 = gsap.timeline({ repeat: -1 });
    tlImg2.to(this.img2.nativeElement, { duration: 2.5, ease: Power1.easeInOut, y: 15 })
      .to(this.img2.nativeElement, { duration: 2.5, ease: Power1.easeInOut, y: 0 });
    gsap.from(this.img2.nativeElement, { opacity: 0, duration: 8 })

    var tlImg3 = gsap.timeline({ repeat: -1 });
    tlImg3.to(this.circleBlue.nativeElement, { duration: 5.5, ease: Power1.easeInOut, y: -100 })
      .to(this.circleBlue.nativeElement, { duration: 5.5, ease: Power1.easeInOut, y: -20 });

  }

}
