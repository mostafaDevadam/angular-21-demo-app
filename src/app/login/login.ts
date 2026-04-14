import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';
import { AuthService } from '../auth/auth.service';

interface LoginModel {
  email: string
  password: string
  rememberMe: boolean
}


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
    private service = inject(AuthService)

  loginModel = signal<LoginModel>({
    email: '',
    password: '',
    rememberMe: false
  })

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email)
    email(schemaPath.email)
    required(schemaPath.password)
    minLength(schemaPath.password, 6)
  })

  // Optional: loading state while submitting
  isSubmitting = signal(false);

 // ✅ Correct for Angular 21
  emailError = computed(() => 
    this.loginForm.email().errors().find(err => err.kind === 'required' || err.kind === 'email')
  );

  passwordError = computed(() => 
    this.loginForm.password().errors().find(err => err.kind === 'required')
  );

  onSubmit(event: Event){
    event.preventDefault();
    /* console.log('Form !', this.loginModel());
  if (this.loginForm()) {
      console.log('Form submitted successfully!', this.loginModel());
      // Call your API here
    } else {
      console.log('Form is invalid');
    }*/

      if (this.loginForm().invalid()) {
      // Optional: mark all fields touched on submit
      // this.loginForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);
    // Call your API here
    console.log('✅ Login successful!', this.loginModel());

    // Simulate API call (replace with your real HTTP request)
    setTimeout(() => {
      //console.log('✅ Login successful!', this.loginModel());
      this.isSubmitting.set(false);

      // Optional: reset form after successful submit
      // this.loginModel.set({ email: '', password: '' });
      // this.loginForm.reset();   // or however reset works in your Angular version
    }, 1500);

    // login
    this.service.login(this.loginModel().email, this.loginModel().password)
    .then(res => res.subscribe(res => console.log("login res:", res)))
    .catch(err => console.log("login err:", err))

  }


}
