package io.catwizard.auidit.repository;
import io.catwizard.auidit.domain.Book;
import org.javers.spring.annotation.JaversSpringDataAuditable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;


/**
 * Spring Data  repository for the Book entity.
 */
@SuppressWarnings("unused")
@Repository
@JaversSpringDataAuditable
public interface BookRepository extends JpaRepository<Book, Long> {

}
