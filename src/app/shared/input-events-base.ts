import { EventEmitter, Output } from '@angular/core';

import { InputBase as InputBase } from './input-base';

export abstract class InputEventsBase extends InputBase {
    @Output() public clickEvent = new EventEmitter<any>();
    @Output() public keyEnterEvent = new EventEmitter<any>();
    @Output() public focusEvent = new EventEmitter<any>();
    @Output() public blurEvent = new EventEmitter<any>();

    protected setValueToReactiveFormField(value: any = this.value): void {
        const field = this.getFieldSelect();
        if (field) {
            field.setValue(value);
        }
    }
}
