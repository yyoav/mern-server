import { Logger, Module, OnModuleInit } from '@nestjs/common';
import { ExampleModule } from './example/example.module';
import { SharedModule } from './shared/shared.module';
@Module({
  imports: [SharedModule, ExampleModule],
  controllers: [],
  providers: [],
})
export class AppModule implements OnModuleInit {
  constructor() {}

  async onModuleInit(): Promise<void> {
    try {
      Logger.log('[AppModule:onModuleInit] Initialize Application...');
    } catch (_e) {
      process.exit(1);
    }
  }
}
