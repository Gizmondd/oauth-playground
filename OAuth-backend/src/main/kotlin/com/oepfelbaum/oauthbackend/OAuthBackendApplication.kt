package com.oepfelbaum.oauthbackend

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class OAuthBackendApplication

fun main(args: Array<String>) {
	runApplication<OAuthBackendApplication>(*args)
}
