import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'miembros',
        loadChildren: () => import('./miembros/miembros.module').then(m => m.NewoApp12MiembrosModule)
      },
      {
        path: 'entrada-miembros',
        loadChildren: () => import('./entrada-miembros/entrada-miembros.module').then(m => m.NewoApp12EntradaMiembrosModule)
      },
      {
        path: 'invitados',
        loadChildren: () => import('./invitados/invitados.module').then(m => m.NewoApp12InvitadosModule)
      },
      {
        path: 'entrada-invitados',
        loadChildren: () => import('./entrada-invitados/entrada-invitados.module').then(m => m.NewoApp12EntradaInvitadosModule)
      },
      {
        path: 'sedes',
        loadChildren: () => import('./sedes/sedes.module').then(m => m.NewoApp12SedesModule)
      },
      {
        path: 'espacio-libre',
        loadChildren: () => import('./espacio-libre/espacio-libre.module').then(m => m.NewoApp12EspacioLibreModule)
      },
      {
        path: 'tipo-espacio',
        loadChildren: () => import('./tipo-espacio/tipo-espacio.module').then(m => m.NewoApp12TipoEspacioModule)
      },
      {
        path: 'host-sede',
        loadChildren: () => import('./host-sede/host-sede.module').then(m => m.NewoApp12HostSedeModule)
      },
      {
        path: 'reservas',
        loadChildren: () => import('./reservas/reservas.module').then(m => m.NewoApp12ReservasModule)
      },
      {
        path: 'espacios-reserva',
        loadChildren: () => import('./espacios-reserva/espacios-reserva.module').then(m => m.NewoApp12EspaciosReservaModule)
      },
      {
        path: 'registro-compra',
        loadChildren: () => import('./registro-compra/registro-compra.module').then(m => m.NewoApp12RegistroCompraModule)
      },
      {
        path: 'facturacion',
        loadChildren: () => import('./facturacion/facturacion.module').then(m => m.NewoApp12FacturacionModule)
      },
      {
        path: 'equipo-empresas',
        loadChildren: () => import('./equipo-empresas/equipo-empresas.module').then(m => m.NewoApp12EquipoEmpresasModule)
      },
      {
        path: 'miembros-equipo-empresas',
        loadChildren: () =>
          import('./miembros-equipo-empresas/miembros-equipo-empresas.module').then(m => m.NewoApp12MiembrosEquipoEmpresasModule)
      },
      {
        path: 'cuenta-asociada',
        loadChildren: () => import('./cuenta-asociada/cuenta-asociada.module').then(m => m.NewoApp12CuentaAsociadaModule)
      },
      {
        path: 'beneficio',
        loadChildren: () => import('./beneficio/beneficio.module').then(m => m.NewoApp12BeneficioModule)
      },
      {
        path: 'perfil-equipo-empresa',
        loadChildren: () => import('./perfil-equipo-empresa/perfil-equipo-empresa.module').then(m => m.NewoApp12PerfilEquipoEmpresaModule)
      },
      {
        path: 'empresa',
        loadChildren: () => import('./empresa/empresa.module').then(m => m.NewoApp12EmpresaModule)
      },
      {
        path: 'landing',
        loadChildren: () => import('./landing/landing.module').then(m => m.NewoApp12LandingModule)
      },
      {
        path: 'productos-servicios',
        loadChildren: () => import('./productos-servicios/productos-servicios.module').then(m => m.NewoApp12ProductosServiciosModule)
      },
      {
        path: 'pais',
        loadChildren: () => import('./pais/pais.module').then(m => m.NewoApp12PaisModule)
      },
      {
        path: 'ciudad',
        loadChildren: () => import('./ciudad/ciudad.module').then(m => m.NewoApp12CiudadModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./blog/blog.module').then(m => m.NewoApp12BlogModule)
      },
      {
        path: 'comentario-blog',
        loadChildren: () => import('./comentario-blog/comentario-blog.module').then(m => m.NewoApp12ComentarioBlogModule)
      },
      {
        path: 'feed',
        loadChildren: () => import('./feed/feed.module').then(m => m.NewoApp12FeedModule)
      },
      {
        path: 'comentario-feed',
        loadChildren: () => import('./comentario-feed/comentario-feed.module').then(m => m.NewoApp12ComentarioFeedModule)
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then(m => m.NewoApp12ChatModule)
      },
      {
        path: 'chat-grupo',
        loadChildren: () => import('./chat-grupo/chat-grupo.module').then(m => m.NewoApp12ChatGrupoModule)
      },
      {
        path: 'chats-listado',
        loadChildren: () => import('./chats-listado/chats-listado.module').then(m => m.NewoApp12ChatsListadoModule)
      },
      {
        path: 'chat-list-grupo',
        loadChildren: () => import('./chat-list-grupo/chat-list-grupo.module').then(m => m.NewoApp12ChatListGrupoModule)
      },
      {
        path: 'evento',
        loadChildren: () => import('./evento/evento.module').then(m => m.NewoApp12EventoModule)
      },
      {
        path: 'categoria-contenidos',
        loadChildren: () => import('./categoria-contenidos/categoria-contenidos.module').then(m => m.NewoApp12CategoriaContenidosModule)
      },
      {
        path: 'grupos',
        loadChildren: () => import('./grupos/grupos.module').then(m => m.NewoApp12GruposModule)
      },
      {
        path: 'miembros-grupo',
        loadChildren: () => import('./miembros-grupo/miembros-grupo.module').then(m => m.NewoApp12MiembrosGrupoModule)
      },
      {
        path: 'recursos-fisicos',
        loadChildren: () => import('./recursos-fisicos/recursos-fisicos.module').then(m => m.NewoApp12RecursosFisicosModule)
      },
      {
        path: 'uso-recurso-fisico',
        loadChildren: () => import('./uso-recurso-fisico/uso-recurso-fisico.module').then(m => m.NewoApp12UsoRecursoFisicoModule)
      },
      {
        path: 'tipo-recurso',
        loadChildren: () => import('./tipo-recurso/tipo-recurso.module').then(m => m.NewoApp12TipoRecursoModule)
      },
      {
        path: 'consumo-market',
        loadChildren: () => import('./consumo-market/consumo-market.module').then(m => m.NewoApp12ConsumoMarketModule)
      },
      {
        path: 'prepago-consumo',
        loadChildren: () => import('./prepago-consumo/prepago-consumo.module').then(m => m.NewoApp12PrepagoConsumoModule)
      },
      {
        path: 'margen-newo-eventos',
        loadChildren: () => import('./margen-newo-eventos/margen-newo-eventos.module').then(m => m.NewoApp12MargenNewoEventosModule)
      },
      {
        path: 'margen-newo-grupos',
        loadChildren: () => import('./margen-newo-grupos/margen-newo-grupos.module').then(m => m.NewoApp12MargenNewoGruposModule)
      },
      {
        path: 'margen-newo-blog',
        loadChildren: () => import('./margen-newo-blog/margen-newo-blog.module').then(m => m.NewoApp12MargenNewoBlogModule)
      },
      {
        path: 'margen-newo-productos',
        loadChildren: () => import('./margen-newo-productos/margen-newo-productos.module').then(m => m.NewoApp12MargenNewoProductosModule)
      },
      {
        path: 'tipo-prepago-consumo',
        loadChildren: () => import('./tipo-prepago-consumo/tipo-prepago-consumo.module').then(m => m.NewoApp12TipoPrepagoConsumoModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NewoApp12EntityModule {}
