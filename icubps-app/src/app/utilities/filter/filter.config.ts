import { FormArray } from '@angular/forms';

export interface FilterConfig {
    category: string;
    items: FilterItems[];
  }

interface FilterItems {
    name?: string;
    count?: string;
}
