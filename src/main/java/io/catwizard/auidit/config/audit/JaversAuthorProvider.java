package io.catwizard.auidit.config.audit;

import io.catwizard.auidit.config.Constants;
import io.catwizard.auidit.security.SecurityUtils;
import org.javers.spring.auditable.AuthorProvider;
import org.springframework.stereotype.Component;

@Component
public class JaversAuthorProvider implements AuthorProvider {

   @Override
   public String provide() {
       return SecurityUtils.getCurrentUserLogin().orElse(Constants.SYSTEM_ACCOUNT);
   }
}
