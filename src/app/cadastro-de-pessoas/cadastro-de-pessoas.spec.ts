import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDePessoas } from './cadastro-de-pessoas';

describe('CadastroDePessoas', () => {
  let component: CadastroDePessoas;
  let fixture: ComponentFixture<CadastroDePessoas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDePessoas],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDePessoas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
