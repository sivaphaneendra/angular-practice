import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/posts/post.component';

const routes:Routes = [
    {
        path: '',
        component: UserComponent
    },
    {
        path: 'posts',
        component: PostComponent
    }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes);