import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;
  let counterElement: HTMLElement;
  let countElement: HTMLElement | null;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    counterElement = fixture.nativeElement;
  });

  it('should create component', () => {
    expect(component).toBeDefined();
  });

  it('check count is 0 on load', () => {
    expect(component.count).toEqual(0);
  });

  it('should contain count as "0" in DOM initially', () => {
    const  countElement = counterElement.querySelector('.display');
    expect(countElement?.textContent).toEqual('0');
  });

  it('check add functionality on click', () => {
    let addButtonElement = counterElement.querySelector('.actionButton-add');
    addButtonElement?.dispatchEvent(new Event('click'));
    expect(component.count).toEqual(1);
  });

  it('check subtract functionality on click', () => {
    let subtractButtonElement = counterElement.querySelector('.actionButton-subtract');
    subtractButtonElement?.dispatchEvent(new Event('click').);
    expect(component.count).toEqual(-1);
  });

  it('check 1 add button click and 1 subtract button click functionality', () => {
    let addButtonElement = counterElement.querySelector('.actionButton-add');
    let subtractButtonElement = counterElement.querySelector('.actionButton-subtract');
    addButtonElement?.dispatchEvent(new Event('click'));
    expect(component.count).toEqual(1);
    subtractButtonElement?.dispatchEvent(new Event('click'));
    expect(component.count).toEqual(0);
  });

  // it('should contain count as "1" after add button click in DOM initially', () => {
  //   const  countElement = counterElement.querySelector('.display');
  //   expect(countElement?.textContent).toEqual('1');
  // })
});

