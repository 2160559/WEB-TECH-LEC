@extends('layouts.app')
@section('content')
    <div class="uk-flex uk-flex-center uk-flex-middle">
        <div class="uk-width-medium uk-padding-small">
            <form action="/">
                <fieldset class="uk-fieldset">
                    <legend class="uk-legend">Login</legend>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: user"></span>
                            <input class="uk-input uk-form-large" required placeholder="Username" type="text">
                        </div>
                    </div>
                    <div class="uk-margin">
                        <div class="uk-inline uk-width-1-1">
                            <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: lock"></span>
                            <input class="uk-input uk-form-large" required placeholder="Password" type="password">
                        </div>
                    </div>

                    <div class="uk-margin">
                        <label><input class="uk-checkbox" type="checkbox"> Keep me logged in</label>
                    </div>
                    <div class="uk-margin">
                        <button type="submit" class="uk-button uk-button-primary uk-button-primary uk-button-large uk-width-1-1">LOG IN</button>
                    </div>
                </fieldset>
            </form>
            <div>
                <div class="uk-text-center">
                    <a class="uk-link-reset uk-text-small" data-uk-toggle="target: #recover;animation: uk-animation-slide-top-small">Forgot your password?</a>
                </div>
                <div class="uk-margin-small-top" id="recover" hidden>
                    <form action="/">

                        <div class="uk-margin-small">
                            <div class="uk-inline uk-width-1-1">
                                <span class="uk-form-icon uk-form-icon-flip" data-uk-icon="icon: mail"></span>
                                <input class="uk-input" placeholder="E-mail" required type="text">
                            </div>
                        </div>
                        <div class="uk-margin-small">
                            <button type="submit" class="uk-button uk-button-primary uk-button-primary uk-width-1-1">SEND PASSWORD</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection