# HTTP Status Codes — Short Terminology Reference

A compact quick-reference for common HTTP status codes used in APIs and web apps. For each code: meaning, typical use and a one-line example.

## 2xx — Success

- 200 OK — The request succeeded. Use when returning requested data or a successful operation result.
  Example: GET /users -> 200 OK with JSON body.

- 201 Created — Resource was created successfully. Often used after POST that creates a record.
  Example: POST /users -> 201 Created with Location header to new resource.

## 3xx — Redirection

- 300 Multiple Choices — The request has multiple possible responses (rare in APIs).
  Example: API returns alternative representations; clients choose one.

- 301 Moved Permanently — The resource has moved to a new URL permanently; client should update links.
  Example: GET /old-path -> 301 Moved Permanently with Location: /new-path

## 4xx — Client Errors

- 400 Bad Request — The request is malformed or invalid (syntax or validation error).
  Example: Missing required JSON field -> 400 with validation errors.

- 401 Unauthorized — Authentication required or failed. Use when auth credentials are missing/invalid.
  Example: Missing/invalid Bearer token -> 401 Unauthorized.

- 402 Payment Required — Reserved for future use (rarely used). Sometimes used by billing systems.
  Example: Request requires payment/subscription -> 402 Payment Required.

- 403 Forbidden — Authenticated but not allowed to perform the action. Use for permission/ACL failures.
  Example: Authenticated user tries to access admin-only endpoint -> 403 Forbidden.

- 404 Not Found — The requested resource doesn't exist. Use for unknown IDs or invalid routes.
  Example: GET /users/999 -> 404 Not Found.

- 429 Too Many Requests — Client has sent too many requests in a given time (rate limiting).
  Example: Exceeding API quota -> 429 with Retry-After header.

## 5xx — Server Errors (general)

Server errors indicate a problem on the server side. Return useful, non-sensitive messages and log details for debugging.

- 500 Internal Server Error — Generic server error when an unexpected condition occurs.
  Example: Unhandled exception in request handler -> 500 Internal Server Error.

- 503 Service Unavailable — Server is currently unable to handle the request (overloaded or down for maintenance).
  Example: Maintenance window -> 503 with Retry-After header.



---

Usage tips:

- Use precise codes: 2xx for success, 4xx for client errors (validation/auth), 5xx for server faults.
- Include helpful JSON error bodies for 4xx/5xx responses: { "status": 400, "error": "Bad Request", "message": "email is required" }.
- For rate limiting (429) and temporary outages (503), include Retry-After when possible.

This file is a short quick-reference; expand examples or link to RFC7231 for full semantics when needed.
