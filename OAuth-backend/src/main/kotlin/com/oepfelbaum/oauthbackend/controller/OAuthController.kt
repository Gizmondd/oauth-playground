package com.oepfelbaum.oauthbackend.controller

import org.springframework.security.core.annotation.AuthenticationPrincipal
import org.springframework.security.oauth2.core.user.OAuth2User
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.util.Collections

@RestController
class OAuthController {

  @GetMapping("/user")
  fun user(@AuthenticationPrincipal principal: OAuth2User): Map<String, Any> {
    return Collections.singletonMap("name", principal.getAttribute("name"))
  }
}
