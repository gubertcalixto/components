import { Input } from '@angular/core';

import { PermissionComponentBase } from './permission-base';

export abstract class ComponentBase extends PermissionComponentBase {
    @Input() tooltip: string;
    @Input() tooltipPosition: 'left' | 'right' | 'above' | 'below' | 'before' | 'after' = 'below';
    @Input() classes: string;
}
