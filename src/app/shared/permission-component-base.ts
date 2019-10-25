import { Input } from '@angular/core';

export abstract class PermissionComponentBase {
    protected permissionList: string | string[];
    @Input()
    public get permissions(): string | string[] {
        return this.permissionList;
    }
    public set permissions(value: string | string[]) {
        this.permissionList = typeof value === 'string' ? [value] : value;
    }
    @Input() permissionType: 'HIDE' | 'DISABLE' = 'HIDE';
}
