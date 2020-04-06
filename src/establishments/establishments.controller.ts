import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { EstablishmentsService } from './establishments.service';
import { Establishment } from './establishment';
import { CreateEstablishment } from './commands/create-establishment';
import { UpdateEstablishment } from './commands/update-establishment';

@Controller('establishments')
export class EstablishmentsController {
    constructor(private establishmentsService: EstablishmentsService) { }

    @Get()
    findEstablishments(): Establishment[] {
        return this.establishmentsService.findEstablishments();
    }

    @Get(':establishmentId')
    getEstablishmentById(@Param('establishmentId') establishmentId: string): Establishment {
        const establishment = this.establishmentsService.getEstablishmentById(establishmentId);

        // TODO: retornar Not Found (404) quando não existir o estabelecimento
        // TODO: retornar uma DTO com detalhes e não a entidade

        return establishment;
    }

    @Post()
    createEstablishment(@Body() request: CreateEstablishment): Establishment {
        const establishment = this.establishmentsService.createEstablishment(request);

        // TODO: retornar uma DTO com detalhes e não a entidade

        return establishment;
    }

    @Put(':establishmentId')
    updateEstablishment(@Param('establishmentId') establishmentId: string, @Body() request: UpdateEstablishment): void {
        request.id = establishmentId;
        this.establishmentsService.updateEstablishment(request);
        // TODO: retornar No Content 204
    }

    @Delete(':establishmentId')
    removeEstablishment(@Param('establishmentId') establishmentId: string): void {
        this.establishmentsService.removeEstablishment(establishmentId);
        // TODO: retornar No Content 204
    }
}
