import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { Particle } from '../../../models/Particle';

const maxParticles = 100;
const timeUntilIdle = 60 * 1000;  // in ms, 60s

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit {
  @ViewChild('animation', { static: false })
  animationCanvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  private canvasWidth: number;
  private canvasHeight: number;

  private particles: Particle[] = [];
  private drawInterval: number;

  private userIdle: Subject<boolean> = new Subject();
  private userTimeout: number;
  public isIdle = false;

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.setupCanvas();
    this.setParticles();
  }

  public navigateAway(): void {
    this.router.navigate(['/portfolio']);
  }

  // Animated background
  private setupCanvas(): void {
    this.canvasHeight = this.animationCanvas.nativeElement.offsetHeight;
    this.canvasWidth = this.animationCanvas.nativeElement.offsetWidth;

    // Set display size
    this.canvasHeight = 100 * this.canvasHeight / 100 || 766;
    this.canvasWidth = 80 * this.canvasWidth / 100;

    this.animationCanvas.nativeElement.height = this.canvasHeight;
    this.animationCanvas.nativeElement.width = this.canvasWidth;

    this.context = this.animationCanvas.nativeElement.getContext('2d');
    this.context.translate(0.5, 0.5);
  }

  private setParticles(): void {
    for (let i = 0; i < maxParticles; i++) {
      this.particles.push({
        x: this.canvasWidth * Math.random(),
        y: this.canvasHeight * Math.random(),
        r: Math.random() * 5 + 1,
        d: this.particles[i] && this.particles[i].d ? this.particles[i].d : Math.random() * 10,
        color: this.getColor()
      });
    }

    if (this.drawInterval) {
      clearInterval(this.drawInterval);
    }
    this.drawInterval = window.setInterval(() => {
      this.drawParticles();
    }, 30);
  }

  private getColor(): string {
    return 'rgba('
              + Math.random() * 255 + ', '
              + Math.random() * 255 + ', '
              + Math.random() * 255 + ', 0.3)';
  }

  private drawParticles(): void {
    if (!this.context) {
      return;
    }

    this.context.clearRect(-5, -5, this.canvasWidth + 5, this.canvasHeight + 5);

    for (let i = 0; i < maxParticles; i++) {
      const p: Particle = this.particles[i];

      this.context.beginPath();
      this.context.fillStyle = p.color;
      this.context.moveTo(p.x, p.y);
      this.context.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      this.context.fill();

      this.particles[i].y += Math.cos(p.d) + 1 + (p.r / 2);

      if (p.y > this.canvasHeight) {
        this.particles[i] = {
          x: Math.random() * this.canvasWidth,
          y: -8,
          r: p.r,
          d: p.d,
          color: p.color
        };
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.setupCanvas();
    this.setParticles();
  }


}
