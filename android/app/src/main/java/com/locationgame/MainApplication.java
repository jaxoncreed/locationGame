package com.locationgame;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.onradar.react.RNRadarPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.onradar.sdk.Radar;
import com.onradar.sdk.RadarCallback;
import com.onradar.sdk.model.RadarEvent;
import com.onradar.sdk.model.RadarUser;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new RNRadarPackage()
      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    Radar.initialize(getApplicationContext(), "org_test_pk_6de1b9c37ce70cad526cb9ecbc09f66edf004bd6");
    SoLoader.init(this, /* native exopackage */ false);
  }
}
