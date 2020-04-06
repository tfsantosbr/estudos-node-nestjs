import { Injectable } from '@nestjs/common';
import { Establishment, EstablishmentStatus } from './establishment';
import { v4 as uuid } from 'uuid';
import { CreateEstablishment } from './commands/create-establishment';
import { UpdateEstablishment } from './commands/update-establishment';

@Injectable()
export class EstablishmentsService {
    private establishments: Establishment[] = [];

    findEstablishments(): Establishment[] {
        return this.establishments;
    }

    getEstablishmentById(establishmentId: string): Establishment {
        return this.establishments.find(p => p.id == establishmentId);
    }

    createEstablishment(request: CreateEstablishment): Establishment {
        const establishment: Establishment = {
            id: uuid(),
            name: request.name,
            status: EstablishmentStatus.AwaitingValidation
        };

        this.establishments.push(establishment);

        return establishment;
    }

    updateEstablishment(request: UpdateEstablishment): void {
        const establishment =  this.establishments.find(p => p.id == request.id);
        
        establishment.name = request.name;
    }

    removeEstablishment(establishmentId: string): void {
        this.establishments = this.establishments.filter(p => p.id != establishmentId);
    }
}
