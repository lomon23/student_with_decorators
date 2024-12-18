import { describe, it, expect } from 'vitest';
import Student  from '../src/basic'; // Шлях до вашого файлу з класом

describe('Student class', () => {
  it('should create a valid student', () => {
    const student = new Student('John', 'Doe', 10, 'A1');
    expect(student.getFullName()).toBe('John Doe');
  });

  it('should throw error if grade is less than 0', () => {
    const student = new Student('John', 'Doe', 10, 'A1');
    expect(() => {
      student.grade = -1; // Це має викликати помилку
    }).toThrowError('grade cannot be less than 0');
  });

  it('should throw error if grade is greater than 12', () => {
    const student = new Student('John', 'Doe', 10, 'A1');
    expect(() => {
      student.grade = 13; // Це має викликати помилку
    }).toThrowError('grade cannot be greater than 12');
  });

  it('should throw error if firstName is empty', () => {
    expect(() => {
      const student = new Student('', 'Doe', 10, 'A1');
    }).toThrowError('firstName is required');
  });

  it('should throw error if lastName is empty', () => {
    expect(() => {
      const student = new Student('John', '', 10, 'A1');
    }).toThrowError('lastName is required');
  });

  it('should throw error if group is empty', () => {
    expect(() => {
      const student = new Student('John', 'Doe', 10, '');
    }).toThrowError('group is required');
  });
});
