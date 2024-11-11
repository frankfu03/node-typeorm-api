/**
 * The HTTP 417 Expectation Failed error indicates that the expectation given in
 * the request's Expect header could not be met. After receiving a 417 response,
 * a client should repeat the request without an Expect request header, including
 * the file in the request body without waiting for a 100 response. See the Expect
 * header documentation for more details.
 */
import { HttpError, HttpErrorCode } from "./HttpError";

export class ExpectationFailedError extends HttpError<HttpErrorCode> {
    public static readonly STATUS_CODE = 417;

    constructor(
        message: string,
        method?: string,
        url?: string,
    ) {
        super(ExpectationFailedError.STATUS_CODE, message, method, url);
    }
}