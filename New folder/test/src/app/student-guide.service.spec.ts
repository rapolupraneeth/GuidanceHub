import { TestBed } from '@angular/core/testing';

import { StudentGuideService } from './student-guide.service';

describe('StudentGuideService', () => {
  let service: StudentGuideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentGuideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
