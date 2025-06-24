#lang racket/base


(provide authenticate deauthenticate)


(define (authenticate)
  (displayln "Authenticating..."))
  (let ([user (getenv "USER")])
    (displayln (format "User: ~a" user)))
  (let ([password (getenv "PASSWORD")])
    (displayln (format "Password: ~a" password)))
  (let ([token (getenv "TOKEN")])
    (displayln (format "Token: ~a" token)))
    (if (and user password token)
      (displayln "Authentication successful")
      (displayln "Authentication failed"))


(define (deauthenticate)
  (displayln "Deauthenticating..."))