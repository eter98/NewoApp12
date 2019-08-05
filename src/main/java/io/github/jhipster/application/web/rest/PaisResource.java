package io.github.jhipster.application.web.rest;

import io.github.jhipster.application.domain.Pais;
import io.github.jhipster.application.service.PaisService;
import io.github.jhipster.application.web.rest.errors.BadRequestAlertException;
import io.github.jhipster.application.service.dto.PaisCriteria;
import io.github.jhipster.application.service.PaisQueryService;

import io.github.jhipster.web.util.HeaderUtil;
import io.github.jhipster.web.util.PaginationUtil;
import io.github.jhipster.web.util.ResponseUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;

import java.util.List;
import java.util.Optional;
import java.util.stream.StreamSupport;

import static org.elasticsearch.index.query.QueryBuilders.*;

/**
 * REST controller for managing {@link io.github.jhipster.application.domain.Pais}.
 */
@RestController
@RequestMapping("/api")
public class PaisResource {

    private final Logger log = LoggerFactory.getLogger(PaisResource.class);

    private static final String ENTITY_NAME = "pais";

    @Value("${jhipster.clientApp.name}")
    private String applicationName;

    private final PaisService paisService;

    private final PaisQueryService paisQueryService;

    public PaisResource(PaisService paisService, PaisQueryService paisQueryService) {
        this.paisService = paisService;
        this.paisQueryService = paisQueryService;
    }

    /**
     * {@code POST  /pais} : Create a new pais.
     *
     * @param pais the pais to create.
     * @return the {@link ResponseEntity} with status {@code 201 (Created)} and with body the new pais, or with status {@code 400 (Bad Request)} if the pais has already an ID.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PostMapping("/pais")
    public ResponseEntity<Pais> createPais(@Valid @RequestBody Pais pais) throws URISyntaxException {
        log.debug("REST request to save Pais : {}", pais);
        if (pais.getId() != null) {
            throw new BadRequestAlertException("A new pais cannot already have an ID", ENTITY_NAME, "idexists");
        }
        Pais result = paisService.save(pais);
        return ResponseEntity.created(new URI("/api/pais/" + result.getId()))
            .headers(HeaderUtil.createEntityCreationAlert(applicationName, true, ENTITY_NAME, result.getId().toString()))
            .body(result);
    }

    /**
     * {@code PUT  /pais} : Updates an existing pais.
     *
     * @param pais the pais to update.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the updated pais,
     * or with status {@code 400 (Bad Request)} if the pais is not valid,
     * or with status {@code 500 (Internal Server Error)} if the pais couldn't be updated.
     * @throws URISyntaxException if the Location URI syntax is incorrect.
     */
    @PutMapping("/pais")
    public ResponseEntity<Pais> updatePais(@Valid @RequestBody Pais pais) throws URISyntaxException {
        log.debug("REST request to update Pais : {}", pais);
        if (pais.getId() == null) {
            throw new BadRequestAlertException("Invalid id", ENTITY_NAME, "idnull");
        }
        Pais result = paisService.save(pais);
        return ResponseEntity.ok()
            .headers(HeaderUtil.createEntityUpdateAlert(applicationName, true, ENTITY_NAME, pais.getId().toString()))
            .body(result);
    }

    /**
     * {@code GET  /pais} : get all the pais.
     *

     * @param pageable the pagination information.

     * @param criteria the criteria which the requested entities should match.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the list of pais in body.
     */
    @GetMapping("/pais")
    public ResponseEntity<List<Pais>> getAllPais(PaisCriteria criteria, Pageable pageable) {
        log.debug("REST request to get Pais by criteria: {}", criteria);
        Page<Pais> page = paisQueryService.findByCriteria(criteria, pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

    /**
    * {@code GET  /pais/count} : count all the pais.
    *
    * @param criteria the criteria which the requested entities should match.
    * @return the {@link ResponseEntity} with status {@code 200 (OK)} and the count in body.
    */
    @GetMapping("/pais/count")
    public ResponseEntity<Long> countPais(PaisCriteria criteria) {
        log.debug("REST request to count Pais by criteria: {}", criteria);
        return ResponseEntity.ok().body(paisQueryService.countByCriteria(criteria));
    }

    /**
     * {@code GET  /pais/:id} : get the "id" pais.
     *
     * @param id the id of the pais to retrieve.
     * @return the {@link ResponseEntity} with status {@code 200 (OK)} and with body the pais, or with status {@code 404 (Not Found)}.
     */
    @GetMapping("/pais/{id}")
    public ResponseEntity<Pais> getPais(@PathVariable Long id) {
        log.debug("REST request to get Pais : {}", id);
        Optional<Pais> pais = paisService.findOne(id);
        return ResponseUtil.wrapOrNotFound(pais);
    }

    /**
     * {@code DELETE  /pais/:id} : delete the "id" pais.
     *
     * @param id the id of the pais to delete.
     * @return the {@link ResponseEntity} with status {@code 204 (NO_CONTENT)}.
     */
    @DeleteMapping("/pais/{id}")
    public ResponseEntity<Void> deletePais(@PathVariable Long id) {
        log.debug("REST request to delete Pais : {}", id);
        paisService.delete(id);
        return ResponseEntity.noContent().headers(HeaderUtil.createEntityDeletionAlert(applicationName, true, ENTITY_NAME, id.toString())).build();
    }

    /**
     * {@code SEARCH  /_search/pais?query=:query} : search for the pais corresponding
     * to the query.
     *
     * @param query the query of the pais search.
     * @param pageable the pagination information.
     * @return the result of the search.
     */
    @GetMapping("/_search/pais")
    public ResponseEntity<List<Pais>> searchPais(@RequestParam String query, Pageable pageable) {
        log.debug("REST request to search for a page of Pais for query {}", query);
        Page<Pais> page = paisService.search(query, pageable);
        HttpHeaders headers = PaginationUtil.generatePaginationHttpHeaders(ServletUriComponentsBuilder.fromCurrentRequest(), page);
        return ResponseEntity.ok().headers(headers).body(page.getContent());
    }

}